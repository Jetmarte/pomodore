import { ProjectDAO } from '../../model/DAO/ProjectDAO.mjs';
import { Project } from '../../core/Project.mjs';
import { Router } from 'express'

const router = Router();


//================define endpoints=========
router.get('/', (req, res) => {
  res.send("hola mundo saludos")
});

router.get('/projects', (req, res) => {
  let project = new ProjectDAO();
  project.readAll((allData) => {
    res.json(allData);
  });

});

router.get('/project/:id', (req, res) => {
  let project = new ProjectDAO();
  let id_project = req.params.id;
  project.read(id_project, (row) => {
    res.json(row);
  });
});

router.post('/project', (req, res) => {
  let datos = req.body;
  let project = new ProjectDAO();
  let myProject = new Project(
    datos.id_project,
    datos.name_project,
    datos.note_project);
  project.create(myProject)
  res.status(200).json({ message: '¡Solicitud POST exitosa!', datos });
});

router.put('/project/:id', (req, res) => {
  let datos = req.body;
  let project = new ProjectDAO();
  let myProject = new Project(
    req.params.id,
    datos.name_project,
    datos.note_project);
  project.update(myProject)
  res.status(200).json({ message: '¡Solicitud POST exitosa!', datos });
});


router.delete('/project/:id', (req, res) => {
  let id = req.params.id;
  let projectDAO = new ProjectDAO();
  projectDAO.delete(id);
  res.status(200).json({ message: '¡Request delete exitosa!'});
});


export {router};

