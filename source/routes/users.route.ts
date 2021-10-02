import express from 'express';
import controller from '../controllers/user.controller';
const router = express.Router();

// Get
router.get('/', controller.home)
router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);

// user
router.post('/users', controller.addUser);

// Put
router.put('/users/:id', controller.updateUser);

// Delete
router.delete('/users/:id', controller.deleteUser);

export = router;