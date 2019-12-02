import { Cow } from "../models/cow";
import { daoGetAllCows } from "../repositories/cow-dao";

export function getAllCows(): Promise<Cow[]>{
    try{
        return daoGetAllCows()
    }catch (e){
        throw e; 
    }

}