import mongoose from "mongoose";

// Models é um modelo da estrutura do objeto ou tabela no banco de dados
// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento

const AutorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
}, { versionKey: false });

const autor = mongoose.model('autores', AutorSchema);

export { autor, AutorSchema };
