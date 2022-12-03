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
router.post("/updateTodo", authVerifyMiddleware, todoController.updateTodo);
router.post("/removeTodo",authVerifyMiddleware, todoController.removeTodo);
router.get("/selectTodoByStatus", authVerifyMiddleware, todoController.selectTodoByStatus);
router.get("/selectTodoByDate", authVerifyMiddleware, todoController.selectTodoByDate);
module.exports = router;