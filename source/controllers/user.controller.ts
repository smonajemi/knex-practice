import {Context} from 'koa'


// getting home page
export const home = async (ctx: Context) => {
    /** Routes */
    const error = new Error('Backend is working');
    // return ctx.json({
    //     message: error.message
    // });
};


// adding a user
export const createUser = async (ctx: Context) => {
    ctx.send('addUser is working')
};

// getting all users
export const getUsers = async (ctx: Context) => {
    ctx.send('getUsers is working')
};

// getting a single user
export const getUser = async (ctx: Context) => {
    ctx.send('getUser is working')
};

// updating a user
export const updateUser = async (ctx: Context) => {
    ctx.send('updateUser is working')
};

// deleting a user
export const deleteUser = async (ctx: Context) => {
    ctx.send('deleteUser is working')
};

export default {home, createUser, getUsers, getUser, updateUser, deleteUser};