const express = require('express');
const app = express();
const port = 4000;
const db = require('./models/index');
const { where } = require('sequelize');
const cors =  require('cors');

app.use(express.json());
app.use(cors());

app.post('/createTask', async (req, res) => {
    try {
        const {task, status} = req.body;
        console.log(req.body)
        const createdTask = await db.Tasks.create({task, status});
        if(!createdTask.id){
            return res.status(500).json({error: "Error occurred while creating task"});
        }
        return res.status(200).json({message: "Task created successfully", createdTask});
    } catch (error) {
        return res.status(500).json({error: "Internal Error Occurred"});
    }
});

app.get('/tasks', async (req, res) => {
    const tasks = await db.Tasks.findAll();
    return res.status(200).json(tasks);
});

app.put('/task/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const task = await db.Tasks.update(req.body, {where: {id}});
        if(!task){
            return res.status(500).json({error: "Error while updating task"});
        }
        return res.status(200).json({message: "Task updated successfully", task});
    } catch (error) {
        return res.status(500).json({error: "Internal Error Occurred"});
    }
});

app.delete('/task/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const task = await db.Tasks.destroy({where: {id}});
        if(!task){
            return res.status(500).json({error: "Error while deleting task"});
        }
        return res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        return res.status(500).json({error: "Internal Error Occurred"});
    }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});