import express from 'express';
import { getFarms } from '../services/farm-service';

export const farmRouter = express.Router();

async function controllerGetFarms(req, res){
    let users = await getFarms()
    if(users){        
        res.json(users)
    }else{
        res.sendStatus(500)
    }

}

farmRouter.get('',  controllerGetFarms)