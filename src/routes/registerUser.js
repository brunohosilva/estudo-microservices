const Cliente = require("../model/user");

exports.registerUser = function (req, res) {
  const cliente = new Cliente(req.body);
  cliente
    .save()
    .then((result) => {
      res.status(201).send({ output: "Cadastrado", payload: result });
    })
    .catch((erro) => {
      res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` });
    });
};
