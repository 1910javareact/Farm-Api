import * as workerServices from '../services/worker-services';
import express from 'express';

export const workerRouter = express.Router();

workerRouter.get('',
    async (req, res) => {
        try {
            const workers = await workerServices.getAllWorkersBySalary();
            if (workers) {
                res.json(workers);
            } else {
                res.sendStatus(500);
            }
        }catch(e){
            res.status(e.status).send(e.message)
        }
    
});

workerRouter.get('/farmId/:farmId', 
    async (req, res) => {
        try {
            if(isNaN(+req.params.farmId)){
                throw{
                    status: 400,
                    message: 'Please use a number for farmId'
                }
            }else{
                const workers = await workerServices.getWorkersByFarmId(+req.params.farmId)
                res.status(200).json(workers)
            }
        } catch (e) {
            res.status(e.status).send(e.message)
        }
    })