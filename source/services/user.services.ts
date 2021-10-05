import { User, UserEntity} from '../types/user.types'
import * as userRepository from '../repositories/user.repositories'
import { mapUserEntityFromUser, mapUserFromUserEntity } from "../mappers/user.mappers"


export const fetchUsers = async (): Promise<User[] | any> => {
    const result = await userRepository.fetchUsers()
    return {...result}
}

export const findUserById = async (userId: string): Promise<User | any> => {
    const user: UserEntity = await userRepository.fetchUserById(userId)
    if (!user) {
        throw new Error(`User with ${userId} does not exist`)
    }
    const response = mapUserFromUserEntity(user)
    return response
} 

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await userRepository.fetchUserByEmail(email)
    if (!user) {
        return null
    }
    const response = mapUserFromUserEntity(user)
    return response
}

export const createUser = async (user: User): Promise<User> => {
    const existingUser = await findUserByEmail(user.username)
    if (existingUser) {
        throw new Error(`User ${user.username} already exists`)
    }
    const userEntity = mapUserEntityFromUser(user)  
    const [db_response] = await userRepository.createUser(userEntity)
    const response = mapUserFromUserEntity(db_response)
    return {...response}
}

export const updateUser = async (userId: string, user: User): Promise<User> => {
    const userEntity = mapUserEntityFromUser(user)
    const [db_response] = await userRepository.updateUser(userId, userEntity)
    const response = mapUserFromUserEntity(db_response)
    return response
}

export const deleteUser = async (userId: string, user: User): Promise<User> => {
    const userEntity = mapUserEntityFromUser(user)
    userEntity.is_deleted = true
    userEntity.username = ''
    await userRepository.updateUser(userId, userEntity)
    const [db_response] = await userRepository.deleteUser(userId, userEntity)
    const response = mapUserFromUserEntity(db_response)
    return response
}
