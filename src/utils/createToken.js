const jwt = require("jsonWebtoken");
const cfg = require("../config/cfg");
const create_token = (id, usuario, email) => {
  return jwt.sign({ id, usuario, email }, cfg.jwt_secret, {
    expiresIn: cfg.expires_in,
  });
};

module.exports = create_token;
