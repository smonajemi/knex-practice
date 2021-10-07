import { Entity, BusinessObject } from "./default/default.types";

export interface User extends BusinessObject {
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isDeleted: boolean;
}

export interface UserEntity extends Entity {
  id?: string;
  username: string;
  first_name: string;
  last_name: string;
  phone_number: number;
  is_deleted: boolean;
}
