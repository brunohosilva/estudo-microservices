const Cliente = require("../model/user");

exports.listUsers = function (req, res) {
  Cliente.find((erro, result) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao processar o pedido -> ${erro}` });
    }

    res.status(200).send({ output: "Ok", payload: result });
  });
};
