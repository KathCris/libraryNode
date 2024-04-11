import express from 'express';

const app = express();
// app.use(express.json()); tem a função de middleware (que é ter acesso a req e res e conseguir fazer modificações)
app.use(express.json());

const livros = [
    {
        "id": 1,
        "livro": "Oceano no fim do caminho"
    }, 
    {
        "id": 2,
        "livro": "Lugar nenhum"
    }, 
    {
        "id": 3,
        "livro": "A culpa é das estrelas"
    }, 
]

function buscaLivro(id) {
    return livros.findIndex(item => {
        return item.id === Number(id);
    })
}

app.get('/', (req, res) => {
    res.status(200).send('Get do curso de node');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    try {
        livros.push(req.body)
        res.status(201).send('Livro cadastrado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro interno ao cadastrar livro!');
    }
});

app.put('/livro/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].livro = req.body.livro;
    res.status(200).json(livros[index]);
});

export default app;