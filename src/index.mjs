import express, { Router, response } from 'express';
import morgan from 'morgan';
import {router} from './controller/routes/projectRoutes.mjs';

const app = express();

//allow server manage html info
app.use(express.urlencoded({extended: false}));
//allow our server manage a json format.
app.use(express.json())


//routes
app.use(router);



//================= Star Server =================================
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);

app.listen(
  app.get('port'), () => {
  console.log(`Servidor iniciado en http://localhost:${app.get('port')}`);
});
//===============================================================