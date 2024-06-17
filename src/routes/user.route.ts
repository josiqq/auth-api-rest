import { Router } from 'express'
import { getUsers, createUser, getUser, loginUser } from '../controllers/user.controller';

const router = Router();

router.route('/')
    .get(getUsers)

router.route('/login')
    .post(loginUser)

router.route('/signup')
    .post(createUser)

router.route('/:idUser')
    .get(getUser)
 

export default router;