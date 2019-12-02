import { connectionPool } from '.';
import { PoolClient } from 'pg';
import { Worker } from '../models/worker';
import { multiWorkerDTOtoWorker } from '../util/workerdto-to-worker';

export async function daoGetAllWorkersBySalary(): Promise<Worker[]> {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();        
        const result = await client.query('SELECT * FROM dairyland.workers order by salary desc');        
        if (result.rowCount === 0) {
            throw 'No Workers In Database'
        }                
        return multiWorkerDTOtoWorker(result.rows);
    } catch (e) {
        if (e === 'No Workers In Database') {
            throw {
                status: 400,
                message: 'No Workers In Database'
            }
        } else {
            throw {
                status: 500,
                message: 'Internal Server Error'
            };
        }

    } finally {
        client && client.release();
    }
}

export async function daoGetWorkersByFarmId(farmId: number){
    let client: PoolClient
    try{
        client = await connectionPool.connect()
        let results = await client.query('SELECT * FROM dairyland.workers WHERE farm_id = $1',[farmId])
        if(results.rowCount === 0){
            throw 'No Workers On That Farm'
        }
        return multiWorkerDTOtoWorker(results.rows)
    }catch(e){
        if(e === 'No Workers On That Farm'){
            throw{
                status: 400,
                message: 'No Workers On That Farm'
            }
        }else{
            throw{
                status: 500,
                message: 'Internal Server Error'
            }
        }
    }finally{
        client && client.release()
    }
}