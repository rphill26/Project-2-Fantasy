const express = require("express")
const router = require("express").Router();

router.get("/user", (req, res) => {
    res.render("index");
});

module.exports = router;