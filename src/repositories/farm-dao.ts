import { Farm } from "../models/farm";
import { PoolClient } from "pg";
import { connectionPool } from ".";
import { farmDTOtoFarm, multiFarmDTOtoFarm } from "../util/Farmdto-to-farm";

export async function daoUpdateFarm(id: number, farm: Farm): Promise<Farm> {
    let client: PoolClient;
    client = await connectionPool.connect();
    try {
        const temp = await client.query(`SELECT * FROM dairyland.farms WHERE farm_id = $1`, [id])
        const tempFarm = farmDTOtoFarm(temp.rows);
        for (const key in farm) {
            if (farm[key] === undefined) {
                farm[key] = tempFarm[key];
            }
        }
        await client.query(`UPDATE dairyland.farms SET farm_id = $1, "location" = $2, farm_name = $3, 
            farm_age = $4, agri_type = $5, revenue = $6 WHERE farm_id = $7`, [farm.farm_id, farm.location, farm.farm_name, 
            farm.farm_age, farm.agri_type, farm.revenue, id]);
        return farm;
    } catch (e) {
        console.log(e);
        
        throw {
            status: 500,
            message: `Internal Server Error`
        }
    }
}

export async function daoGetAllFarms():Promise <Farm[]> {
    let client: PoolClient
    try{
        client = await connectionPool.connect()
        let result = await client.query(`select * from dairyland.farms`)

        if(result.rowCount === 0){
            throw 'No Farms Exists'
        }
        else {
            return multiFarmDTOtoFarm(result.rows)
        }
    }
    catch(e){
        if(e == 'No Farms Exists'){
            throw{
                status:404,
                message: 'No Farms Exists'
            }
        }
        else {
            console.log(e);
            
            throw {
                status: 500,
                message: 'Internal Server Error'
            }
        }
    }
    finally{
        client && client.release()
    }
}

// getting Farms by Location
export async function daoGetFarmByLocation(location: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const result = await client.query('',
        [location]);
        if (result.rowCount === 0) {
            throw 'Farms do not exist';
        } else {

            return farmDTOtoFarm(result.rows);
        }
    } catch (e) {
        if (e === 'Farms do not exist') {
            throw{
                status: 404,
                message: 'Cannot find the farms'
            };
        } else {
            throw{
                status: 500,
                message: 'Internal Server Error'
            };
        }
    } finally {
        client.release();
    }
}