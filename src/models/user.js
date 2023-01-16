const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50],
      },
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, { onDelete: "CASCADE" });
  };

  return User;
};

export default getUserModel;
