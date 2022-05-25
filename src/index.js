const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require("../swagger.json");
const cfg = require("./config/cfg");
const notFound = require("./middleware/notFound");
const routeCliente = require("./routes/client");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

app.use("/clientes", routeCliente);

app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(notFound);

app.listen(4001, () => console.log("Server on-line. Listen on port 4001"));
