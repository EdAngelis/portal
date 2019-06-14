const router = require('express').Router();
const userCtrl = require('./user-controller');
const authorization = require('../services/authentication');

router.post('/getUser',  userCtrl.getUser );
router.post('/register',  userCtrl.registerUser);
router.post('/login',  userCtrl.login);
router.post('/vl',  userCtrl.emailValiadtion);
router.post('/msg',  userCtrl.emailContact);

module.exports = router;