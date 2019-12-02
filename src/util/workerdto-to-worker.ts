import { WorkerDTO } from "../dtos/worker-dto";
import { Worker } from "../models/worker";

export function workerDTOtoWorker(wDTO: WorkerDTO[]):Worker{    
    let worker = new Worker(wDTO[0].worker_id, wDTO[0].name, wDTO[0].machine_id, wDTO[0].farm_id, wDTO[0].salary, wDTO[0].career)    
    return worker
}

export function multiWorkerDTOtoWorker(wDTOs: WorkerDTO[]):Worker[]{
    let workers = [];
    for(let wDTO of wDTOs){
        workers.push(workerDTOtoWorker([wDTO]))
    }
    return workers
}