import express from 'express';
import Livros from "./livroRoutes.js";
import Autores from "./autorRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Aqui foi certinho'));

    app.use(express.json(), Livros, Autores);
}

export default routes;