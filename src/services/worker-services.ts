import * as workersDao from '../repositories/worker-dao';
import { Worker } from '../models/worker';

export function getAllWorkersBySalary(): Promise<Worker[]> {
    return workersDao.daoGetAllWorkersBySalary();
}

export function getWorkersByFarmId(farmId: number){
    return workersDao.daoGetWorkersByFarmId(farmId)
}