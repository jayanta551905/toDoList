const express = require('express');
const profileController = require('../controllers/profileController');
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware');
const todoController = require('../controllers/todoController');
const router = express.Router();

// create a profile
router.post("/createProfile", profileController.createProfile);
router.post("/userLogin", profileController.userLogin);
router.get("/selectProfile", authVerifyMiddleware, profileController.selectProfile);
router.post("/updateProfile", authVerifyMiddleware, profileController.updateProfile);


// to do list api
router.post("/createTodo", authVerifyMiddleware, todoController.createTodo);
router.get("/selectTodo", authVerifyMiddleware, todoController.selectTodo);


module.exports = router;