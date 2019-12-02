import { Farm } from "../models/farm";
import { PoolClient } from "pg";
import { connectionPool } from ".";

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
        await client.query(`UPDATE dairyland.farm SET farm_id = $1, "location" = $2, farm_name = $3, 
            farm_age = $4, agri_type = $5, revenue = $6`, [farm.farm_id, farm.location, farm.farm_name, 
            farm.farm_age, farm.agri_type, farm.revenue]);
        return farm;
    } catch (e) {
        throw {
            status: 500,
            message: `Internal Server Error`
        }
    }
}