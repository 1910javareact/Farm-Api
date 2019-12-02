import { daoUpdateFarm, daoGetAllFarms } from "../repositories/farm-dao";
import { Farm } from "../models/farm";

export async function updateFarm(id, farm) {
    try {
        return await daoUpdateFarm(id, farm);
    } catch (e) {
        throw e;
    }
}

export function getFarms(): Promise<Farm[]> {
    try {
        return daoGetAllFarms();
    } catch (e) {
        throw e;
    }
}

export function getFarmsByLocation(location:number):Promise<Farm> {
    try {
        return daoGetFarmsByLocation(location);
    } catch (e) {
        throw e;
    }

}