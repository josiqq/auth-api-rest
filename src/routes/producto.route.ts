import { Router } from 'express'
import { getProductos, createProducto, getProducto, updateProducto, deleteProducto } from '../controllers/producto.controller';
import { validateToken } from './validate-token';

const router = Router();

router.route('/')
    .get(getProductos)
    .post(validateToken, createProducto);

router.route('/:idProducto')
    .get(getProducto)
    .put(validateToken, updateProducto)
    .delete(validateToken, deleteProducto);

export default router;