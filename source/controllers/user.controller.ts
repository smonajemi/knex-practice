import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.services'
import axios, { AxiosResponse } from 'axios';
import { User } from '../types/user.types';


// getting home page
export const home = async (req: Request, res: Response, next: NextFunction) => {
    /** Routes */
    const error = new Error('Backend is working');
    // return res.json({
    //     message: error.message
    // });
};


// adding a user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req.body)
        console.log('user', user);
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

// getting all users
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
   const result: User[] | any = await userService.fetchUsers()
   req.body = result
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

export default {home, createUser, getUsers, getUser, updateUser, deleteUser};