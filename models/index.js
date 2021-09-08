const User = require("./User");
const Blogpost = require("./blogPost");
const Postcomment = require("./postComment");

// User to BlogPost
User.hasMany(Blogpost, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Blogpost.belongsTo(User, {
  foreignKey: "author_id",
});

// User to PostComment

User.hasMany(Postcomment, {
  foreignKey: "commented_by",
  onDelete: "CASCADE",
});

Postcomment.belongsTo(User, {
  foreignKey: "commented_by",
});

// BlogPost to PostComment

Blogpost.hasMany(Postcomment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Postcomment.belongsTo(Blogpost, {
  foreignKey: "post_id",
});

module.exports = { User, Blogpost, Postcomment };
