const express = require("express");
const route = express.Router();
const verifica_token = require("../middleware/verifyToken");
const {
  deleteUser,
  listUsers,
  registerUser,
  updateUserData,
  login,
} = require("../controller");

route.get("/list", listUsers);

route.post("/register", registerUser);

route.post("/login", login);

route.put("/atualizar/:id", updateUserData);

route.delete("/apagar/:id", verifica_token, deleteUser);

module.exports = route;
