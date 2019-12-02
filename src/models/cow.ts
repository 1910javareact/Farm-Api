export class Cow {
    cowId: number 
    username: string
    password: string
    workerId: number
    farmId: number
    revenueAnnual: number
    constructor(cowId: number, username: string, password: string, workerId: number, farmId: number, revenueAnnual: number){
        this.cowId = cowId,
        this.username = username,
        this.password = password,
        this.workerId = workerId,
        this.farmId = farmId,
        this.revenueAnnual = revenueAnnual
    }
}