import { Role, RoleEntity } from "../types/role.types";
import * as roleRepository from "../repositories/role.repositories";
import {
  mapRoleEntityFromRole,
  mapRoleFromRoleEntity,
} from "../mappers/role.mappers";

export const findRoleByUserId = async (
  userId: string
): Promise<Role | null> => {
  const user = await roleRepository.fetchRoleByUserId(userId);
  if (!user) {
    return null
  }
  return mapRoleFromRoleEntity(user);
};

export const createRole = async (role: Role): Promise<Role> => {
  const existingUser = await findRoleByUserId(role.userId as string);
  if (existingUser) {
    throw new Error(`Cannot create role for user with id ${role.userId}`);
  }
  const roleEntity = mapRoleEntityFromRole(role);
  const [db_response] = await roleRepository.createRole(roleEntity);
  return mapRoleFromRoleEntity(db_response);
};

export const updateRole = async (userId: string, role: Role): Promise<Role> => {
  const existingRole = await findRoleByUserId(userId)
  if (!existingRole) {
    throw new Error(`Cannot update role for user with id ${userId}`);
  }
  const roleEntity = mapRoleEntityFromRole(role)
  const [db_response] = await roleRepository.updateRole(userId, roleEntity.id as string, roleEntity);
  return mapRoleFromRoleEntity(db_response);
};

export const deleteRole = async (userId: string): Promise<Role> => {
  const existingRole = await findRoleByUserId(userId)
  if (!existingRole) {
    throw new Error(`Cannot delete role for user with id ${userId}`);
  }
  const [db_response] = await roleRepository.deleteRole(userId, existingRole.id as string);
  return mapRoleFromRoleEntity(db_response);
};
