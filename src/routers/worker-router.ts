import * as workerServices from '../services/worker-services';
import express from 'express';

export const workerRouter = express.Router();

workerRouter.get('', 
    async (req, res) => {
    const workers = await workerServices.getAllWorkersBySalary();
    if (workers) {
        res.json(workers);
    } else {
        res.sendStatus(500);
    }
});