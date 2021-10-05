import express from 'express';
import * as controller from '../controllers/user.controller';
const router = express.Router();

// Get
router.get('/', controller.getUsers);
router.get('/users/:id', controller.getUser);

// user
router.post('/user', controller.createUser);

// Put
router.put('/users/:id', controller.updateUser);

// Delete
router.delete('/users/:id', controller.deleteUser);

export = router;