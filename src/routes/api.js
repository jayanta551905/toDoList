const express = require('express');
const profileController = require('../controllers/profileController');
const authVeryfyMiddleware = require('../middleware/authVeryfyMiddleware');
const todoController = require('../controllers/todoController');
const router = express.Router();

// create a profile
router.post("/createProfile", profileController.createProfile);
router.post("/userLogin", profileController.userLogin);
router.get("/selectProfile", authVeryfyMiddleware, profileController.selectProfile);
router.post("/updateProfile", authVeryfyMiddleware, profileController.updateProfile);


// to do list api
router.post("/createTodo", authVeryfyMiddleware, todoController.createTodo);
router.get("/selectTodo", authVeryfyMiddleware, todoController.selectTodo);


module.exports = router;