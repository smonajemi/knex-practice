import express from 'express';
import * as controller from '../controllers/user.controllers';
import * as controller2 from '../controllers/role.controllers';
const router = express.Router();

// Get
router.get('/users', controller.getUsers);
router.get('/users/:userId', controller.getUser);
router.get('/roles/:userId', controller2.getRoleByUserId);
// Post
router.post('/users/createUser', controller.createUser);

// Put
router.put('/users/updateUser/:userId', controller.updateUser);

// Delete
router.delete('/users/deleteUser/:userId', controller.deleteUser);

export = router;