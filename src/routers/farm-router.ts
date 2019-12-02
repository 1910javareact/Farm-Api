import express from 'express';
import { Farm } from '../models/farm';
import { updateFarm } from '../services/farm-service';

export const farmRouter = express.Router();

farmRouter.patch('', [async (req, res) => {
    const { body } = req;
    const farm = new Farm(0, ``, ``, 0, ``, 0)
    for (const key in farm) {
        if (body[key] !== undefined) {
            farm[key] = body[key];
        }
    }
    const id = farm.farm_id;
    try {
        const patch = await updateFarm(id, farm);
        res.status(201).json(patch);
    } catch (e) {
        res.status(e.status).send(e.message);
    }
}])
async function controllerGetFarms(req, res){
    let users = await getFarms()
    if(users){        
        res.json(users)
    }else{
        res.sendStatus(500)
    }

}

farmRouter.get('',  controllerGetFarms)
