import {Entity, Object} from './default/default.types'

export interface User extends Object {
    id?: string;
    username: string;
    firstName: string;
    lastName: string;
}

export interface UserEntity extends Entity {
    id?: string;
    username: string;
    first_name: string;
    last_name: string;
}