import dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();

app.get('/', (req, res)=>{
res.send('Hello World');
})
const port = process.env.PORT || 5000;
app.listen(port);