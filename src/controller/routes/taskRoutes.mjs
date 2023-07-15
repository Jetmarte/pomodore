import { TaskDAO } from '../../model/DAO/TaskDAO.mjs';
import { Task } from '../../core/Task.mjs';
import { Router } from 'express'
import {ProjectDAO} from "../../model/DAO/ProjectDAO.mjs";
import {projectRouter} from "./projectRoutes.mjs";
import {Project} from "../../core/Project.mjs";
const taskRouter = Router();

//================== Routes ======================

taskRouter.get('/tasks', (req, res) => {
    let task = new TaskDAO();

    task.readAll((allData) => {
        res.json(allData);
    });

});

taskRouter.get('/tasks/:id', (req, res) => {
    let taskDao = new TaskDAO();
    let id_project = req.params.id;
    taskDao.readByProject(id_project, (allData) => {
        res.json(allData);
    });

});

taskRouter.get('/task/:id', (req, res) => {
    let task = new TaskDAO();
    let id_task = req.params.id;
    task.read(id_task, (row) => {
        res.json(row);
    });
});

taskRouter.post('/task', (req, res) => {
    let data = req.body;
    let taskDao = new TaskDAO();
    let myTask = new Task(
        data.id_task,
        data.name_task,
        data.note_task,
        data.pomodores,
        data.project_task);
    taskDao.create(myTask)
    res.status(200).json({ message: '¡Solicitud POST exitosa!', data });
});

taskRouter.put('/task/:id', (req, res) => {
    let data = req.body;
    let taskDao = new TaskDAO();
    let myTask = new Task(
        req.params.id,
        data.name_task,
        data.note_task,
        data.pomodores,
        data.project_task);
    taskDao.update(myTask)
    res.status(200).json({ message: '¡Solicitud POST exitosa!', data });
});

taskRouter.delete('/task/:id', (req, res) => {
    let id = req.params.id;
    let taskDAO = new TaskDAO();
    taskDAO.delete(id);
    res.status(200).json({ message: '¡Request delete exitosa!'});
});





export {taskRouter};