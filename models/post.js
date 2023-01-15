const pg = require("pg");

const postSchema = new pg.Schema({
  imgUrl: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true },
  readby: { type: Array, required: true },
});

module.exports = pg.model("Post", postSchema);
