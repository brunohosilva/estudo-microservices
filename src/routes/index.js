const { listUsers } = require("./getUsers");
const { registerUser } = require("./registerUser");
const { updateUserData } = require("./updateUserData");
const { deleteUser } = require("./deleteUser");

module.exports = { listUsers, registerUser, updateUserData, deleteUser };
