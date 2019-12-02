import express from 'express';
import bodyparser from 'body-parser';
import { workerRouter } from './routers/worker-router';
import { cowsRouter } from './routers/cow-router';

const app = express()

app.use(bodyparser.json());

app.use('/workers', workerRouter)
app.use('/cows', cowsRouter)


app.listen(9000, ()=>{
    console.log("App is Alive");
    
})