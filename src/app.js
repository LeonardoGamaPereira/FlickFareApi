import 'dotenv/config'

import filmesController from './controller/filmesController.js';
import LoginController from './controller/LoginController.js';


import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
server.use(filmesController);
server.use(LoginController);



server.use('/storage/filmes', express.static('storage/filmes'));

let port = process.env.PORT;
server.listen(port, () => console.log("API SUBIU na porta: " + port));