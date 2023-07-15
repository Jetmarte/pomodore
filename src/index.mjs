import express, { Router, response } from 'express';
import morgan from 'morgan';
import {projectRouter} from './controller/routes/projectRoutes.mjs';
import {taskRouter} from './controller/routes/taskRoutes.mjs';
import cors from "cors";

const app = express();
app.use(cors());
app.use( function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-AllowOrigin", "GET,HEAD,POTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
//allow server manage html info
app.use(express.urlencoded({extended: false}));
//allow our server manage a json format.
app.use(express.json())


//routes
app.use(projectRouter);
app.use(taskRouter);



//================= Star Server =================================
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);

app.listen(
  app.get('port'), () => {
  console.log(`Servidor iniciado en http://localhost:${app.get('port')}`);
});
//===============================================================
