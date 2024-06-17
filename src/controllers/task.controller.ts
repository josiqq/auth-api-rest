import { Request, Response } from 'express';
import connection from '../db/connection';
import { Task } from '../interface/Task';

export function getTasks(req: Request, res: Response) {
    connection.query('SELECT * FROM task', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}

export function createTask(req: Request, res: Response) {
    const newTask: Task = req.body;
    connection.query('INSERT INTO task set ?', [newTask], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'Facking create task'
            });
        }
    });
}

export function getTask(req: Request, res: Response) {
    const id = req.params.idTask;
    connection.query('SELECT * FROM task WHERE id = ?', [id], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
}

export function updateTask(req: Request, res: Response) {
    const id = req.params.idTask;
    const updateTask: Task = req.body;
    connection.query('UPDATE task set ? WHERE id = ?', [updateTask, id]);
    res.json({
        message: 'Facking update task'
    });
}