const express = require('express');
const profileController = require('../controllers/profileController');
const authVeryfyMiddleware = require('../middleware/authVeryfyMiddleware')
const router = express.Router();

// create a profile
router.post("/createProfile", profileController.createProfile);
router.post("/userLogin", profileController.userLogin);
router.get("/selectProfile", authVeryfyMiddleware, profileController.selectProfile);




module.exports = router;