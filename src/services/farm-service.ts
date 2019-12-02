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