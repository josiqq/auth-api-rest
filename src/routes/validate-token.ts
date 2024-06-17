import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers.authorization;

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Token existe
        const token = headerToken.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRET_KEY!);
            next();
        } catch (err) {
            res.status(401).json({
                msg: 'Token inválido'
            })
        }

    } else {
        // No hay token
        res.status(401).json({
            msg: 'Acceso Denegado'
        })
    }
}