const bcrypt = require("bcrypt");
const Cliente = require("../model/user");
const create_token = require("../utils/createToken");

exports.login = function (req, res) {
  Cliente.findOne({ usuario: req.body.usuario }, (erro, result) => {
    if (erro) {
      return res.status(500).send({ output: `Erro ao localizar => ${erro}` });
    }
    if (!result) {
      return res.status(400).send({ output: `Usuário nao localizdo` });
    }

    bcrypt.compare(req.body.senha, result.senha, (erro, same) => {
      if (erro) {
        return res
          .status(500)
          .send({ output: `Erro ao validar a senha => ${erro}` });
      }
      if (!same) {
        return res.status(400).send({ output: `Senha invalida` });
      }
      const gerar_token = create_token(
        result._id,
        result.usuario,
        result.email
      );

      res.status(200).send({ output: "Autenticado", token: gerar_token });
    });
  });
};
