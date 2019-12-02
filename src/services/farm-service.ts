import { Farm } from "../models/farm";
import { daoGetAllFarms } from "../repositories/farm-dao";

export function getFarms():Promise<Farm[]> {
    try {
        return daoGetAllFarms();
    } catch (e) {
        throw e;
    }
}