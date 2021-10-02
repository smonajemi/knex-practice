import {User, UserEntity } from '../types/user.types'

export const mapUserFromUserEntity = (entity: UserEntity): User => {
    return {
        id: entity.id,
        username: entity.username,
        firstName: entity.first_name,
        lastName: entity.last_name
    }
}

export const mapUserEntityFromUser = (user: User): UserEntity => {
    return {
        username: user.username,
        first_name: user.firstName,
        last_name: user.lastName,
    }
}