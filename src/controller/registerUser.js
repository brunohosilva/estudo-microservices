const Cliente = require("../model/user");
const bcrypt = require("bcrypt");
const cfg = require("../config/cfg");

exports.registerUser = function (req, res) {
  bcrypt.hash(req.body.senha, cfg.salt, (erro, result) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao tentar gerar a senha -> ${erro}` });
    }

    req.body.senha = result;

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
};
