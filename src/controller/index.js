const { listUsers } = require("./getUsers");
const { registerUser } = require("./registerUser");
const { updateUserData } = require("./updateUserData");
const { deleteUser } = require("./deleteUser");
const { login } = require("./login");

module.exports = { listUsers, registerUser, updateUserData, deleteUser, login };
