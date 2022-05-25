const jwt = require("jsonWebtoken");
const cfg = require("../config/cfg");

const verify_token = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).send({ output: "Nao autorizado" });
  }

  jwt.verify(token, cfg.jwt_secret, (error, result) => {
    if (error) {
      return res.status(401).send({ output: `Token invalido ==> ${error}` });
    }
    req.data = {
      id: result.id,
      user: result.user_name,
      email: result.email,
    };
    next();
  });
};

module.exports = verify_token;
