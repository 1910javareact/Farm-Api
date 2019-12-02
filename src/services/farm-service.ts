import { daoUpdateFarm } from "../repositories/farm-dao";

export async function updateFarm(id, farm) {
    return await daoUpdateFarm(id, farm);
}