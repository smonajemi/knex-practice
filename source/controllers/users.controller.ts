import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all Users
const home = async (req: Request, res: Response, next: NextFunction) => {
    /** Routes */
    const error = new Error('Backend is working');
    return res.status(200).json({
        message: error.message
    });
};

// getting all Users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUsers is working')
};

// getting a single User
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUser is working')
};

// updating a User
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('updateUser is working')
};


// deleting a User
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleteUser is working')
};

// adding a User
const addUser = async (req: Request, res: Response, next: NextFunction) => {
    res.send('addUser is working')
};

export default {home, getUsers, getUser, updateUser, deleteUser, addUser };