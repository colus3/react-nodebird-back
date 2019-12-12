module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', // 한글 + 이모티콘
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User, {as: 'User', foreignKey: 'userId' } ); // 테이블에 UserId 컬럼이 생겨요.
    db.Post.hasMany(db.Comment, { foreignKey: 'postId' });
    db.Post.hasMany(db.Image, { foreignKey: 'postId' });
    db.Post.belongsTo(db.Post, { as: 'Retweet', foreignKey: 'retweetId' });
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag', foreignKey: 'postId'});
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers', foreignKey: 'postId' });

  };
  return Post;
};