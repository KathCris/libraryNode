import { autor } from '../models/Autor.js';

class autorController {
    
    static async ListaAutors (req, res) {
        try {
            const ListaAutors = await autor.find({});
            res.status(200).json(ListaAutors);
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao buscar autor!`);
        }
    }

    static async ListaAutoresPorID (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao buscar um autor!`);
        }
    }

    static async CadastraAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: 'autor cadastrado com sucesso!', autor: novoAutor});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao cadastrar autor!`);
        }
    }

    static async AtualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'autor atualizado com sucesso!'});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao atualizar um autor!`);
        }
    }

    static async DeletaAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'autor deletado com sucesso!'});
        } catch (error) {
            res.status(500).send(`${error.message} - Erro interno ao deletar um autor!`);
        }
    }

};

export default autorController;