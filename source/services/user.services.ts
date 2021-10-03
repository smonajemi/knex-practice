import {User} from '../types/user.types'
import * as userRepository from '../repositories/user.repositories'
import * as RadisService from './default/redis'

import { mapUserEntityFromUser, mapUserFromUserEntity } from "../mappers/user.mappers"


export const fetchUsers = async (): Promise<User[] | any> => {
    const result = await userRepository.fetchUsers()
    console.log(result)
    return "{...result}"
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await userRepository.fetchUserByEmail(email)
    if (!user) {
        return null
    }
    const response = mapUserFromUserEntity(user)
    await RadisService.create('users', response)
    return response
}

export const createUser = async (user: User): Promise<User | any> => {
    // const existingUser = await findUserByEmail(user.username)
    // if (existingUser) {
    //     throw new Error(`User ${user.username} already exists`)
    // }
    
    const userEntity = mapUserEntityFromUser(user)  
    const [db_response] = await userRepository.createUser(userEntity)
    const datab = mapUserFromUserEntity(userEntity)
    console.log(datab)

    // const [db_response] = await userRepository.createUser(userEntity)
    // const response = mapUserFromUserEntity(db_response)
    console.log(userEntity)
}