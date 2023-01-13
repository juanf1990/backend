module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    imageUrl: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    readBy: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  });

  return Post;
};
