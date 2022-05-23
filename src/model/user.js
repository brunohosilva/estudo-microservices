const urldb = process.env.DATABASE_URL;
const mongoose = require("mongoose");
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const schema = new mongoose.Schema({
  nome: { type: String, require: true },
  email: { type: String, require: true },
  cpf: { type: String, require: true, unique: true },
  telefone: { type: String, require: true },
  usuario: { type: String, require: true, unique: true },
  senha: { type: String, require: true },
  datacadastro: { type: Date, default: Date.now() },
});

const Cliente = mongoose.model("cliente", schema);
module.exports = Cliente;
