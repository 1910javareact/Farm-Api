import express from 'express';
import bodyparser from 'body-parser';

const app = express()

app.use(bodyparser.json());

app.listen(9000, ()=>{
    console.log("App is Alive");
    
})