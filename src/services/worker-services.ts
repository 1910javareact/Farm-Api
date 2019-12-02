import * as workersDao from '../repositories/worker-dao';
import { Worker } from 'cluster';

export function getAllWorkersBySalary(): Promise<Worker[]> {
    return workersDao.daoGetAllWorkersBySalary();
}