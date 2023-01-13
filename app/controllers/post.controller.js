const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {};

// Find a single Post with an id
exports.findOne = (req, res) => {};

// Delete an account with the specified id in the request // TODO: MOVE TO USER CONTROLLER
exports.delete = (req, res) => {};
