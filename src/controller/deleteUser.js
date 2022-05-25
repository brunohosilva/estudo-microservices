const Cliente = require("../model/user");

exports.deleteUser = function (req, res) {
  Cliente.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(500).send({ output: `Error ao deletar --> ${erro}` });
    return res.status(204).send({});
  });
};
