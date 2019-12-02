export function getAllWorkersBySalary(): Promise<Workers[]> {
    return workersDao.daoGetAllWorkersBySalary();
}