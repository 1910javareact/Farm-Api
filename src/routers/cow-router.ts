import express from 'express'
import { getAllCows } from '../services/cow-service';


export const cowsRouter = express.Router();

//Find Cows
cowsRouter.get('', async (req, res) => {
    try{
        const cows = await getAllCows()
        res.status(200).json(cows)
    }catch(e){
        res.status(e.status).send(e.message)
    }
})