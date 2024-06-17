import { Request, Response } from 'express';
import connection from '../db/connection';
import bycrpt from 'bcrypt';
import { User } from '../interface/User';
import jwt from 'jsonwebtoken';

export function getUsers(req: Request, res: Response) {
    connection.query('SELECT * FROM usuarios', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}

export function getUser(req: Request, res: Response) {
    const id = req.params.idUser;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}


export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    const hashedPassword = await bycrpt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    connection.query('INSERT INTO usuarios (email, password) VALUES (?, ?)', [newUser.email, newUser.password], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'Usuario creado correctamente'
            });
        }
    });

}

export const loginUser = (req: Request, res: Response) => {

    const newUser: User = req.body;

    connection.query('SELECT * FROM usuarios WHERE email = ' + connection.escape(newUser.email), (err, data) => {
        if (err) {
            console.log(err)
        } else {
            if (data.length == 0) {
                // No existe el usuario en la base de datos
                res.status(404).json({
                    msg: 'No existe el usuario en la base de datos',
                })
            } else {
                // Existe
                const userPassword = data[0].password;
                console.log(newUser.password)
                // Comparamos el password
                bycrpt.compare(newUser.password, userPassword, (err, result) => {
                    if (result) {
                        // Login exitoso -- Generamos el token
                        const token = jwt.sign({
                            email: newUser.email,
                        }, process.env.SECRET_KEY!,
                            {
                                expiresIn: '1h' // Expira en 1 hora
                            }
                        )

                        res.status(200).json({
                            accessToken: token
                        })
                    } else {
                        // Password incorrecto
                        res.status(401).json({
                            msg: 'Password incorrecto',
                        })
                    }
                })


            }
        }
    })



}



