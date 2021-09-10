const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");
const postCommentRoutes = require("./postCommentRoutes");

router.use("/users", userRoutes);
router.use("/blogpost", blogPostRoutes);
router.use("/comments", postCommentRoutes);

module.exports = router;
