const express = require("express");
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//index page route
router.get("/", (req, res) => {
    res.render("../views/mainpages/index.ejs");
});

//index page route
router.get("/home", (req, res) => {
    res.render("../views/mainpages/index.ejs");
});

//about us page route
router.get("/About", (req, res) => {
    res.render("../views/mainpages/About.ejs");
});

//contacusepage route
router.get("/Contact", (req, res) => {
    res.render("../views/mainpages/contact.ejs");
});


module.exports = router;