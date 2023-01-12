const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {};

// Find a single Post with an id
exports.findOne = (req, res) => {};

// Update a Post by the id in the request
exports.update = (req, res) => {};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {};

// Likes a Post with the specified id in the request
exports.like = (req, res) => {};

// Dislikes a Post with the specified id in the request
exports.dislike = (req, res) => {};

// Comment on a post with the specified id in the request

exports.comment = (req, res) => {};

// Delete an account with the specified id in the request
exports.delete = (req, res) => {};

// Find all unread posts

exports.findAllunread = (req, res) => {};
