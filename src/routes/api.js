const express = require('express');
const profileController = require('../controllers/profileController')
const router = express.Router();

// create a profile
router.post("/createProfile", profileController.createProfile);
router.post("/userLogin", profileController.userLogin);




module.exports = router;