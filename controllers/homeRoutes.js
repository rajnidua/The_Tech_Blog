const router = require("express").Router();
const { Blogpost, User, Postcomment } = require("../models");
const { primaryKeyAttributes } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all Blogposts and JOIN with user data
    const BlogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "fname", "lname"],
        },
        {
          model: Postcomment,
          attributes: ["id", "content", "created_date"],
          include: [
            {
              model: User,
              attributes: ["id", "fname", "lname"],
            },
          ],
        },
      ],
    });
    console.log("@@@@@@@@@@@" + BlogpostData);
    // Serialize data so the template can read it
    const Blogposts = BlogpostData.map((Blogpost) =>
      Blogpost.get({ plain: true })
    );
    //res.json(Blogposts);

    // Pass serialized data and session flag into template
    res.render("homepage", {
      Blogposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/Blogpost/:id", async (req, res) => {
  try {
    console.log("The value of params id is " + req.params.id);
    const BlogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "fname", "lname"],
        },
        {
          model: Postcomment,
          attributes: ["id", "content", "created_date"],
          include: [
            {
              model: User,
              attributes: ["id", "fname", "lname"],
            },
          ],
        },
      ],
    });
    //const BlogpostData = 1;
    console.log("===================" + BlogpostData);
    const selectedBlogpost = BlogpostData.get({ plain: true });
    //res.json(selectedBlogpost);
    res.render("blogpost", {
      ...selectedBlogpost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/updateBlogpost/:id", async (req, res) => {
  try {
    console.log("The value of params id is " + req.params.id);
    const BlogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "fname", "lname"],
        },
        {
          model: Postcomment,
          attributes: ["id", "content", "created_date"],
          include: [
            {
              model: User,
              attributes: ["id", "fname", "lname"],
            },
          ],
        },
      ],
    });
    //const BlogpostData = 1;
    console.log("===================" + BlogpostData);
    const selectedBlogpost = BlogpostData.get({ plain: true });
    //res.json(selectedBlogpost);
    res.render("updateblogpost", {
      ...selectedBlogpost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    console.log("*************" + req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blogpost }],
    });
    console.log("$$$$$$$$$$$$" + userData);
    const user = userData.get({ plain: true });
    console.log("tttttttttt" + user.fname);
    //res.json(user);
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    res.json({ message: "loggedin" });
    return;
  }

  res.render("login");
});

module.exports = router;
