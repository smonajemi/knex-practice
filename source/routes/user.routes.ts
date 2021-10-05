import express from 'express';
import * as controller from '../controllers/user.controller';
const router = express.Router();

// Get
router.get('/', controller.getUsers);
router.get('/users/:userId', controller.getUser);

// user
router.post('/users', controller.createUser);

// Put
router.put('/users/:userId', controller.updateUser);

// Delete
router.delete('/users/:userId', controller.deleteUser);

export = router;