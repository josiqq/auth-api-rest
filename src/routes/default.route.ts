import { Router } from 'express'
import { defaultController } from '../controllers/default.controllet';

const router = Router();

router.get('/', defaultController);

export default router;