import { Cow } from "../models/cow"
import { PoolClient} from 'pg'
import { connectionPool } from "."
import { multiCowDTOConvertor } from "../util/cowdto-to-cow"



export async function daoGetAllCows(): Promise<Cow[]>{
    let client: PoolClient
    try {
        client = await connectionPool.connect()
        const result = await client.query('')
        return multiCowDTOConvertor(result.rows)
    }catch(e){
        console.log(e);
        throw {
            status: 500,
            message: 'Internal Server Error'
        }
    }finally{
        client && client.release()
    }
}