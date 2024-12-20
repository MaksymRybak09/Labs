const express = require('express');
const authorisateUser = require('../middleware/authorisate-user.js');

const {
    getUsers,
    getMe,
    getUserById,
    addUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
} = require('../controllers/user-controller.js');

const router = express.Router();

router.get('/users', authorisateUser, getUsers);
router.get('/users/me', authorisateUser, getMe);
router.get('/users/:id', authorisateUser, getUserById);
router.post('/users', addUser);
router.post('/users/login', loginUser);
router.post('/users/logout', authorisateUser, logoutUser);
router.patch('/users/:id', authorisateUser, updateUser);
router.delete('/users/:id', authorisateUser, deleteUser);

module.exports = router;