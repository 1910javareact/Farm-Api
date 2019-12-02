import { WorkerDTO } from "../dtos/worker-dto";
import { Worker } from "../models/worker";

export function workerDTOtoWorker(wDTO: WorkerDTO){
    let worker = new Worker(wDTO.worker_id, wDTO.name, wDTO.machine_id, wDTO.farm_id, wDTO.salary, wDTO.career)
    return worker
}

export function multiWorkerDTOtoWorker(wDTOs: WorkerDTO[]){
    let workers: Worker[]
    for(let wDTO of wDTOs){
        workers.push(workerDTOtoWorker(wDTO))
    }
    return workers
}