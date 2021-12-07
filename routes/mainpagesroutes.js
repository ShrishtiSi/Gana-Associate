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

//route for sending emails
router.post("/sendemail", (req, res) => {
    //console.log(req.body);
    let i = req.body.name;
    let j = req.body.dlf;
    let k = parseInt(i) + parseInt(j);
    console.log(k);
    res.send(req.body);
});

module.exports = router;