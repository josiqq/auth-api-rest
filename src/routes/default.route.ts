import { Router } from 'express'
import { defaultController } from '../controllers/default.controllee';

const router = Router();

router.get('/', defaultController);

export default router;