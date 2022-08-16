const Task = require('../models/Task.js')

const getAllTasks =  async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) { 
        const task = await Task.create(req.body)
        res.status(500).json({msg : error})

    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) { 
        const task = await Task.create(req.body)
        res.status(500).json({msg : error})

    }
}

const getTask = (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if (!task)  {
             return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(201).json({task})
    } catch (error) { 
     
        res.status(500).json({msg : error})

    }
}

const updateTask = (req, res) => {
    res.send('up')
} 

const deleteTask = (req, res) => {
    res.send({id:req.params.id})
}


module.exports = {getAllTasks,updateTask,deleteTask,createTask,getTask}