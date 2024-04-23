import express from 'express';
import connectDataBase from './config/dbconnect.js';
import routes from './routes/index.js';

const connection = await connectDataBase();

connection.on("error", (erro) => {
    console.error("erro na conexão com o banco", erro);
})

connection.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
routes(app);   


app.delete('/livro/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    // metodo splice remove index do array a partir do index desejado, diferente do pop que remove
    // somente o ultimo index do array. splice(index, qtdQueDesejaRemover)
    livros.splice(index, 1)
    res.status(200).json(livros);
});

export default app;