import { salvarFilmes, listarFilmes, listFilmesPerId, deleteFilmes, alterFilmes, alterFilmesImage } from "../repository/filmesRepository.js";


import {Router} from "express";
import multer from 'multer';

const upload = multer({dest: 'storage/filmes'});
const servidor = Router();



servidor.post('/filmes', upload.single('imagem'), async (req, resp) => {
  let filmes = req.body;
  if (req.file) {
    filmes.img = req.file.path;
  }

  let filmesInserido = await salvarFilmes(filmes);
  resp.send(filmesInserido);
})

servidor.get('/filmes', async (req, resp) => {
  let listFilmes = await listarFilmes();
  resp.send(listFilmes);
})

servidor.get('/filmes/:id', async (req, resp) => {
    let id = req.params.id;

    let filmesPerId = await listFilmesPerId(id);

    resp.send(filmesPerId);
})

servidor.delete('/filmes/:id', async (req, resp) => {
    let id = req.params.id;

    let linesAffect = await deleteFilmes(id);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})

servidor.put('/filmes/:id', async (req, resp) => {
    let id = req.params.id;
    let clothes = req.body;

    try {
        let linesAffect = await alterFilmes(filmes, id);
        if (linesAffect == 0)
            resp.status(404).send();
        else
        resp.status(202).send();
    } catch (err) {
        resp.status(500).send("Erro ao atualizar o filme.");
    }
})

servidor.put('/filmes/imagem/:id', async (req, resp) => {
    let id = req.params.id;
    let filmes = req.file.path;

    let linesAffect = await alterFilmesImage(id, filmes);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})


export default servidor;