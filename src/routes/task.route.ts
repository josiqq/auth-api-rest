import { Router } from 'express'
import { getTasks, createTask, getTask, updateTask } from '../controllers/task.controller';
import { validateToken } from './validate-token';

const router = Router();

router.route('/')
    .get(validateToken, getTasks)
    .post(validateToken, createTask);

router.route('/:idTask')
    .get(validateToken, getTask)
    .put(validateToken, updateTask);
 

export default router;