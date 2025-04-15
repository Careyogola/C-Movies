import express from 'express';
import { signup,login } from '../controllers/AuthControllers.js';


const Router = express.Router();

Router.get('/signup', signup);

export default Router;