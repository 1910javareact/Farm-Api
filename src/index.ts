import express from 'express';
import bodyparser from 'body-parser';
import { workerRouter } from './routers/worker-router';

const app = express()

app.use(bodyparser.json());

app.use('/workers', workerRouter)

app.listen(9000, ()=>{
    console.log("App is Alive");
    
})