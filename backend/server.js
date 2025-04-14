import dotenv from 'dotenv';
import express from 'express';
import AuthRoutes from './routes/AuthRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/auth',AuthRoutes);


const port = process.env.PORT || 5000;
app.listen(port);