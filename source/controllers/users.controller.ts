import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User {
    id: Number;
    userId: Number;
    firstName: String;
    lastName: String;
}

// getting home page
const home = async (req: Request, res: Response, next: NextFunction) => {
    /** Routes */
    const error = new Error('Backend is working');
    return res.status(200).json({
        message: error.message
    });
};

// getting all users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUsers is working')
};

// getting a single user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUser is working')
};

// updating a user
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('updateUser is working')
};


// deleting a user
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleteUser is working')
};

// adding a user
const addUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('addUser is working')
};

export default {home, getUsers, getUser, updateUser, deleteUser, addUser };