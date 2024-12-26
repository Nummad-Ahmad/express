import express from 'express';
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

app.use('/', (req, res)=>{
    res.json({message: "Hello from api"});
})

app.listen(9000, ()=>{
    console.log('Hello');
})