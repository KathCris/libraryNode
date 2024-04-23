import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.ListaLivros);
routes.get("/livros/:id", LivroController.ListaLivrosPorID);
routes.post("/livros", LivroController.CadastraLivos);
routes.put("/livros/:id", LivroController.AtualizarLivro);
routes.delete("/livros/:id", LivroController.DeletaLivro);

export default routes;