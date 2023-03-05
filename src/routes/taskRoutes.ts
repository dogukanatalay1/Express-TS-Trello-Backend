import * as express from 'express';
import { getTasks } from '../controllers/taskController';
import { body } from 'express-validator';

export const taskRouter = express.Router();

taskRouter.get('/', getTasks);