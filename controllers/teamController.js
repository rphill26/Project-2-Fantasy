const express = require("express")
const router = require("express").Router();

router.get("/team", (req, res) => {
    console.log(req.user);
    res.render("team/index", { user: req.user });
});


module.exports = router;