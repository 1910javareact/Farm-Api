export class WorkerDTO{
    worker_id: number
    name: string
    machine_id: number
    farm_id: number
    salary: number
    career: string

    constructor(
        worker_id: number,
        name: string,
        machine_id: number,
        farm_id: number,
        salary: number,
        career: string)
        {
            this.worker_id = worker_id
            this.name = name
            this.machine_id = machine_id
            this.farm_id = farm_id
            this.salary = salary
            this.career = career
        }
}