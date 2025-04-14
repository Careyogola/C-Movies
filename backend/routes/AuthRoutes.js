import express from 'express';
const Router = express.Router();
import { signup,login } from '../controllers/AuthControllers.js';
Router.get('/signup', signup);

Router.post('/login', login);

Router.post('/logut', async (req, res)=>{
    res.send('logout');
});

export default Router;