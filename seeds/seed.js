const sequelize = require("../config/connection");
const { User, Blogpost, Postcomment } = require("../models");

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");
const postCommentData = require("./postCommentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    await Blogpost.create({
      ...blogPost,
      author_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const blogPosts = await Blogpost.findAll();

  for (const postComment of postCommentData) {
    await Postcomment.create({
      ...postComment,
      commented_by: users[Math.floor(Math.random() * users.length)].id,
      post_id: blogPosts[Math.floor(Math.random() * blogPosts.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
