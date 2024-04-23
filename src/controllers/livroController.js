import livro from '../models/Livro.js';

class LivroController {
    
    static async ListaLivros (req, res) {
        try {
            const ListaLivros = await livro.find({});
            res.status(200).json(ListaLivros);
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao buscar livro!`);
        }
    }

    static async ListaLivrosPorID (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao buscar um livro!`);
        }
    }

    static async CadastraLivos (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: 'Livro cadastrado com sucesso!', livro: novoLivro});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao cadastrar livro!`);
        }
    }

    static async AtualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Livro atualizado com sucesso!'});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao atualizar um livro!`);
        }
    }

    static async DeletaLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: 'Livro deletado com sucesso!'});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao deletar um livro!`);
        }
    }

};

export default LivroController;