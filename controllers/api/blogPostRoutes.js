const router = require("express").Router();
const { Blogpost, Postcomment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      author_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:post_id/postcomment", withAuth, async (req, res) => {
  try {
    const newPostcomment = await Postcomment.create({
      ...req.body,
      commented_by: req.session.user_id,
      post_id: req.params.post_id,
    });

    res.status(200).json(newPostcomment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogPostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.user_id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: "No Blogpost found with this id!" });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", withAuth, async (req, res) => {
  try {
    console.log("requestid" + req.params.id);
    console.log("requestuserid" + req.session.user_id);
    const updatedBlogpost = await Blogpost.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
          author_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(updatedBlogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
