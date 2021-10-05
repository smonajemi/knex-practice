import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.services'
import { User } from '../types/user.types';
import axios, { AxiosResponse } from 'axios';

// adding a user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req.body)
        req.body = user
        res.send(req.body)
        } catch (err) {
        let error = ''
        for (const [key, value] of Object.entries([err])) {
            error = `${value}`
        }
        res.json({
            message: error
        });
        next(error)
    }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
   const result: User[] | any = await userService.fetchUsers()
   req.body = result
   res.send(req.body)
};

// getting a single user
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUser is working')
};

// updating a user
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('updateUser is working')
};

// deleting a user
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleteUser is working')
};

