import livro from '../models/Livro.js';

class LivroController {
    
    static async ListaLivros (req, res) {
        const ListaLivros = await livro.find({});
        res.status(200).json(ListaLivros);
    }

    static async CadastraLivos (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: 'Livro cadastrado com sucesso!', livro: novoLivro});
        } catch (error) {
            res.status(500).send('Erro interno ao cadastrar livro!');
        }
    }


};

export default LivroController;