const getPostModel = (sequelize, { DataTypes }) => {
  const Post = sequelize.define("post", {
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    readBy: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User);
  };

  return Post;
};

export default getPostModel;
