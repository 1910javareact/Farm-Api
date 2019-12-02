import express from 'express';
import bodyparser from 'body-parser';
import { farmRouter } from './routers/farm-router';

const app = express()

app.use(bodyparser.json());

app.use(`/farm`, farmRouter);

app.listen(9000, ()=>{
    console.log("App is Alive");
    
})