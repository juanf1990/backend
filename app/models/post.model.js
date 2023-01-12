module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    imageUrl: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    like: {
      type: Sequelize.STRING,
    },
    dislike: {
      type: Sequelize.STRING,
    },
  });

  return Post;
};
