const express = require("express")
const router = require("express").Router();

router.get("/team", (req, res) => {
    res.render("team/index");
});

// db.Team.findOne({ where: { : req.body.email }})
module.exports = router;