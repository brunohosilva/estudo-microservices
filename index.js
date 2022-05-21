const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const urldb = process.env.DATABASE_URL;
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

app.get("/", (req, res) => {
  Cliente.find((erro, result) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao processar o pedido -> ${erro}` });
    }

    res.status(200).send({ output: "Ok", payload: result });
  });
});

app.post("/", (req, res) => {
  const cliente = new Cliente(req.body);
  cliente
    .save()
    .then((result) => {
      res.status(201).send({ output: "Cadastrado", payload: result });
    })
    .catch((erro) => {
      res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` });
    });
});

app.put("/atualizar/:id", (req, res) => {
  Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res
          .status(500)
          .send({ output: `Erro ao processar a atualizacao --> ${erro}` });
      if (!dados)
        return res
          .status(400)
          .send({ output: `Nao foi possivel atualizar --> ${error}` });
      return res.status(200).send({ output: `Atualizado`, payload: dados });
    }
  );
});

app.delete("/apagar/:id", (req, res) => {
  Cliente.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(500).send({ output: `Error ao deletar --> ${erro}` });
    return res.status(204).send({});
  });
});

app.use((req, res) => {
  res.type("application/json");
  res.status(404).send("404 - Not Found");
});

app.listen(4001, () => console.log("Server on-line. Listen on port 3001"));
