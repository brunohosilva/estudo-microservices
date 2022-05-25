const jwt = require("jsonWebtoken");

const create_token = (id, usuario, email) => {
  jwt.sign({ id, usuario, email }, cfg.jwt_secret, {
    expires_in: cfg.expires_in,
  });
};

module.exports = create_token;
