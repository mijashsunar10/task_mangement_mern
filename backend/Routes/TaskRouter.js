const express = require('express');
const router = express.Router();
const TaskModel = require('../Models/TaskModel');


const {createTask, fetchAllTask} = require('../Controllers/TaskController');

router.get('/',  fetchAllTask
)

//to create a task

router.post('/', createTask);




module.exports = router;