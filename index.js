const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const {
  deleteUser,
  listUsers,
  registerUser,
  updateUserData,
} = require("./src/routes");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/list", listUsers);

app.post("/register", registerUser);

app.put("/atualizar/:id", updateUserData);

app.delete("/apagar/:id", deleteUser);

app.use((req, res) => {
  res.type("application/json");
  res.status(404).send("404 - Not Found");
});

app.listen(4001, () => console.log("Server on-line. Listen on port 3001"));
