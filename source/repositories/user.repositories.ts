import { db } from '../../db/db'
import { UserEntity } from '../types/user.types'


const TABLE_NAME = 'users'
const columns = [
    'id',
    'username',
    'first_name',
    'last_name',
    'created_at',
    'updated_at',
    'deleted_at',
]

export const createUser = async (user: UserEntity): Promise<UserEntity[]> => await db<UserEntity>(TABLE_NAME).insert({...user, created_at: db.raw('now()'), updated_at: db.raw('now()')})
export const updateUser = async (userId: string ,user: UserEntity): Promise<UserEntity[]> => await db<UserEntity>(TABLE_NAME)
    .where('id', userId)
    .whereNull('deleted_at')
    .update({...user, updated_at: db.raw('now()')}, columns)
export const deleteUser = async (userId: string): Promise<UserEntity[]> => await db<UserEntity>(TABLE_NAME)
    .where('id', userId)
    .update({updated_at: db.raw('now()'), deleted_at: db.raw('now()')}, columns)
    