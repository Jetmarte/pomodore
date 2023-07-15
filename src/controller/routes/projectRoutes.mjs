import { ProjectDAO } from '../../model/DAO/ProjectDAO.mjs';
import { Project } from '../../core/Project.mjs';
import { Router } from 'express'

const projectRouter = Router();


//================define endpoints=========
projectRouter.get('/', (req, res) => {
  res.send("hola mundo saludos contraya")
});

projectRouter.get('/projects', (req, res) => {
  let project = new ProjectDAO();
  project.readAll((allData) => {
    res.json(allData);
  });

});

projectRouter.get('/project/:id', (req, res) => {
  let project = new ProjectDAO();
  let id_project = req.params.id;
  project.read(id_project, (row) => {
    res.json(row);
  });
});

projectRouter.post('/project', (req, res) => {
  let datos = req.body;
  let project = new ProjectDAO();
  let myProject = new Project(
    datos.id_project,
    datos.name_project,
    datos.note_project);
  project.create(myProject)
  res.status(200).json({ message: '¡Solicitud POST exitosa!', datos });
});

projectRouter.put('/project/:id', (req, res) => {
  let datos = req.body;
  let project = new ProjectDAO();
  let myProject = new Project(
    req.params.id,
    datos.name_project,
    datos.note_project);
  project.update(myProject)
  res.status(200).json({ message: '¡Solicitud POST exitosa!', datos });
});


projectRouter.delete('/project/:id', (req, res) => {
  let id = req.params.id;
  let projectDAO = new ProjectDAO();
  projectDAO.delete(id);
  res.status(200).json({ message: '¡Request delete exitosa!'});
});


export {projectRouter};

