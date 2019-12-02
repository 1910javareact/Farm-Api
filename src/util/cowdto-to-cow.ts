import { CowDTO } from "../dtos/cow-dto";
import { Cow } from "../models/cow";

export function CowDTOConverter(cowDto: CowDTO[]): Cow {
    return new Cow(
        cowDto[0].cow_id,
        cowDto[0].username,
        cowDto[0].password,
        cowDto[0].worker_id,
        cowDto[0].farm_id,
        cowDto[0].revenue_annual
    )
}


export function multiCowDTOConvertor(cowDto: CowDTO[]): Cow[] {
    let currentCow: CowDTO[] = []
    const result: Cow[] = []
    for (const cow of cowDto){
        if(currentCow.length === 0){
            currentCow.push(cow)
        } else if (currentCow[0].cow_id === cow.cow_id) {
            currentCow.push(cow)
        }else{
            result.push(CowDTOConverter(currentCow))
            currentCow = []
            currentCow.push(cow)
        }
    }
    result.push(CowDTOConverter(currentCow))
    return result;

}