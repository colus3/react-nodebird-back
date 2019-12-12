module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User, { foreignKey: 'userId' });
    db.Comment.belongsTo(db.Post, { foreignKey: 'postId' });
  };
  return Comment;
};