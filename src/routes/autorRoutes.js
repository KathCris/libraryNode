import express from 'express';
import autorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get("/autor", autorController.ListaAutors);
routes.get("/autor/:id", autorController.ListaAutoresPorID);
routes.post("/autor", autorController.CadastraAutor);
routes.put("/autor/:id", autorController.AtualizarAutor);
routes.delete("/autor/:id", autorController.DeletaAutor);

export default routes;