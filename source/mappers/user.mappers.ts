import {User, UserEntity } from '../types/user.types'

export const mapUserFromUserEntity = (entity: UserEntity): User => {
    return {
        id: entity.id,
        username: entity.username,
        firstName: entity.first_name,
        lastName: entity.last_name,
        phoneNumber: entity.phone_number,
        isDeleted: entity.is_deleted
    }
}

export const mapUserEntityFromUser = (user: User): UserEntity => {
    return {
        // no id required since uuid is generating it
        username: user.username,
        first_name: user.firstName,
        last_name: user.lastName,
        phone_number: user.phoneNumber,
        is_deleted: user.isDeleted
    }
}