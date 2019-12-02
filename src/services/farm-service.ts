import { daoUpdateFarm, daoGetAllFarms } from "../repositories/farm-dao";
import { Farm } from "../models/farm";

export async function updateFarm(id, farm) {
    return await daoUpdateFarm(id, farm);
}

export function getFarms():Promise<Farm[]> {
    try {
        return daoGetAllFarms();
    } catch (e) {
        throw e;
    }
}

export function getFarmsByLocation(location:number):Promise<Farm> {
    try {
        return daoGetFarmsByFarms(location);
    } catch (e) {
        throw e;
    }

}