import { Farm } from "../models/farm"
import { FarmDTO } from "../dtos/farm-dto"

export function farmDTOtoFarm(f: FarmDTO[]): Farm {
    return new Farm(
        f[0].farm_id,
        f[0].location,
        f[0].farm_name,
        f[0].farm_age,
        f[0].agri_type,
        f[0].revenue
    )
}

export function multiFarmDTOtoFarm (fD: FarmDTO[]): Farm [] {
    let currentFarm: FarmDTO[] = []
    let result: Farm[] = []
    for(let f of fD){
        if(currentFarm.length === 0){
            currentFarm.push(f)
        }
        else if(currentFarm[0].farm_id === f.farm_id){
            currentFarm.push(f)
        }
        else{
            result.push(farmDTOtoFarm(currentFarm))
            currentFarm = []
            currentFarm.push(f)
        }
    }
    result.push(farmDTOtoFarm(currentFarm))
    return result
}