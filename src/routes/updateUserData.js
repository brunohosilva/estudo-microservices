const Cliente = require("../model/user");

exports.updateUserData = function (req, res) {
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
};
