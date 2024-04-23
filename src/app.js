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

app.get('/', (req, res) => {
    res.status(200).send('Get do curso de node');
});

// app.get('/livros', async (req, res) => {
//     const ListaLivros = await Livro.find({});
//     res.status(200).json(ListaLivros);
// });

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

// app.post('/livros', (req, res) => {
//     try {
//         livros.push(req.body)
//         res.status(201).send('Livro cadastrado com sucesso!');
//     } catch (error) {
//         res.status(500).send('Erro interno ao cadastrar livro!');
//     }
// });

app.put('/livro/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].livro = req.body.livro;
    res.status(200).json(livros[index]);
});

app.delete('/livro/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    // metodo splice remove index do array a partir do index desejado, diferente do pop que remove
    // somente o ultimo index do array. splice(index, qtdQueDesejaRemover)
    livros.splice(index, 1)
    res.status(200).json(livros);
});

export default app;