import { Request, Response } from 'express';

export async function defaultController(req: Request, res: Response) {
    res.json({
        message: 'Server is running'
    });
}