import express from 'express';
import { Farm } from '../models/farm';
import { updateFarm, getFarms, getFarmsByLocation } from '../services/farm-service';

export const farmRouter = express.Router();

farmRouter.patch('', [async (req, res) => {
    const { body } = req;
    const farm = new Farm(0, ``, ``, 0, ``, 0)
    for (const key in farm) {
        if (body[key] === undefined) {
            farm[key] = undefined;
        } else {
            farm[key] = body[key]
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

<<<<<<< HEAD
farmRouter.get('', [async (req, res) => {
    try {
        let users = await getFarms()
        if (users) {
            res.json(users)
        } else {
            res.sendStatus(500)
        }
    } catch (e) {
        res.status(e.status).send(e.message)
    }
}])
=======
farmRouter.get('',  controllerGetFarms)

farmRouter.get('/:location', async (req,res)=>{
    let location = +req.params.farms
    if(isNaN(location)){
        res.sendStatus(400).send('Location does not exist')
    }else{
        try{
            let farms = await getFarmsByLocation(location)
            res.json(farms)
        }catch(e){
            console.log(e);
            
            res.status(e.status).send(e.message)
        }
        
    }
})
>>>>>>> 6f2f69c4697970a84eead3251be2d59c899b22ac
