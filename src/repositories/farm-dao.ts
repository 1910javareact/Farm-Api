import { Farm } from "../models/farm";
import { PoolClient } from "pg";
import { connectPool } from ".";
import { multiFarmDTOFarm, farmDTOtoFarm } from "../util/Farmdto-to-farm"

export async function daoGetAllFarms():Promise <Farm[]> {
    let client: PoolClient
    try{
        client = await connectPool.connect()
        let result = await client.query(`select * from diaryland.farms`)

        if(result.rowCount === 0){
            throw 'No Farms Exists'
        }
        else {
            return multiFarmDTOFarm(result.rows)
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