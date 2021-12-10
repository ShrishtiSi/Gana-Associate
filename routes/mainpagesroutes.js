const express = require("express");
var router = express.Router();
let config = require("../config/config.json");
let transporter = require("../config/mailler");

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
router.post("/sendemail", async(req, res) => {
    console.log(req.body);
    let data = {
        uname: req.body.uname,
        uemail: req.body.uemail,
        uphone: req.body.uphoneno,
        uloc: req.body.dlf,
        umsg: req.body.message,
    };
    let info = await transporter.sendMail({
        from: config.uemail, // sender address
        to: data.uemail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    res.send(data);
});

module.exports = router;