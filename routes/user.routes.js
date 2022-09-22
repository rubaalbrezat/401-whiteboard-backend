'use strict'

const { signup, allUser, login } = require('../controllers/userControllers');
const { saveUser } = require('../middlewares/userAuth');

const router = require('express').Router();


router.post('/login',login)
router.post('/signup',saveUser,signup)
router.get('/users',allUser)

module.exports = router;