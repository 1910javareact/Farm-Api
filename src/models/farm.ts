export class Farm {
    farm_id: number
    location: string
    farm_name: string
    farm_age: number
    agri_type: string
    revenue: number
    constructor(farm_id: number, location: string, farm_name: string, farm_age: number, agri_type: string, revenue: number) {
        this.farm_id = farm_id,
        this.location = location,
        this.farm_name = farm_name,
        this.farm_age = farm_age,
        this.agri_type = agri_type,
        this.revenue = revenue
    }
}