const express = require("express");
var router = express.Router();

router.get("/home", (req, res) => {
    res.render("../views/mainpages/index.ejs");
})

router.get("/About", (req, res) => {
    res.render("../views/mainpages/About.ejs");
})

router.get("/Contact", (req, res) => {
    res.render("../views/mainpages/contact.ejs");
})
module.exports = router;