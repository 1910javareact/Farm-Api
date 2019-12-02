export class Worker{
    workerId: number
    name: string
    machineId: number
    farmId: number
    salary: number
    career: string

    constructor(
        workerId: number,
        name: string,
        machineId: number,
        farmId: number,
        salary: number,
        career: string)
        {
            this.workerId = workerId
            this.name = name
            this.machineId = machineId
            this.farmId = farmId
            this.salary = salary
            this.career = career
        }
}