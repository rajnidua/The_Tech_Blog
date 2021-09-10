const router = require("express").Router();
const { Postcomment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.status(400).json({ message: "Bad Request" });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const PostCommentData = await Postcomment.destroy({
      where: {
        id: req.params.id,
        commented_by: req.session.user_id,
      },
    });

    if (!PostCommentData) {
      res.status(404).json({ message: "No Post Comment found with this id!" });
      return;
    }

    res.status(200).json(PostCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
