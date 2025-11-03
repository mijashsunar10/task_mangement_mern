const express = require('express');
const router = express.Router();
const TaskModel = require('../Models/TaskModel');

router.get('/',  (req, res) => {
    res.send('Task Router is working');
})


module.exports = router;