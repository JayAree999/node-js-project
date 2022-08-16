const Task = require('../models/Task.js')

const getAllTasks = (req, res) => {
    res.send('all items from the file')
}
const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('up')
} 

const deleteTask = (req, res) => {
    res.send({id:req.params.id})
}


module.exports = {getAllTasks,updateTask,deleteTask,createTask,getTask}