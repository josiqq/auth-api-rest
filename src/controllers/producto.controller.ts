import { Request, Response } from 'express';
import connection from '../db/connection';
import { Producto } from '../interface/Producto';

export function getProductos(req: Request, res: Response) {
    connection.query('SELECT * FROM productos', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}

export function createProducto(req: Request, res: Response) {
    const newProducto: Producto = req.body;
    connection.query('INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)', [newProducto.nombre, newProducto.precio, newProducto.imagen], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'Producto creado correctamente'
            });
        }
    });

}

export function getProducto(req: Request, res: Response) {
    const id = req.params.idProducto;
    connection.query('SELECT * FROM productos WHERE id = ?', [id], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}

export function updateProducto(req: Request, res: Response) {
    const id = req.params.idProducto;
    const updateProducto: Producto = req.body;
    connection.query('UPDATE productos set ? WHERE id = ?', [updateProducto, id]);
    res.json({
        message: 'Facking update producto'
    });
}

export function deleteProducto(req: Request, res: Response) {
    const id = req.params.idProducto;
    connection.query('DELETE FROM productos WHERE id = ?', [id]);
    res.json({
        message: 'Facking delete producto'
    });
}