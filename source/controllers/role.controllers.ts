import { Request, Response, NextFunction } from "express";
import * as roleService from "../services/role.services";
import { Role } from "../types/role.types";
import axios, { AxiosResponse } from "axios";

// getting a single user
export const getRoleByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const result = await roleService.findRoleByUserId(userId);
    req.body = result;
    res.send(req.body);
  } catch (err) {
    let error = "";
    for (const [key, value] of Object.entries([err])) {
      error = `${value}`;
    }
    res.json({
      message: error,
    });
    next(error);
  }
};

// updating a user
export const updateRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user = await roleService.updateRole(userId, req.body);
    req.body = user;
    res.send(req.body);
  } catch (err) {
    let error = "";
    for (const [key, value] of Object.entries([err])) {
      error = `${value}`;
    }
    res.json({
      message: error,
    });
    next(error);
  }
};

// deleting a user
export const deleteRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user = await roleService.deleteRole(userId);
    req.body = user;
    res.send(req.body);
  } catch (err) {
    let error = "";
    for (const [key, value] of Object.entries([err])) {
      error = `${value}`;
    }
    res.json({
      message: error,
    });
    next(error);
  }
};
