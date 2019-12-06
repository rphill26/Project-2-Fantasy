const express = require("express")
const router = require("express").Router();

const db = require("../models")

router.get("/team", (req, res) => {
    if(!req.user){
        return res.redirect("/");
    }
    
    console.log(req.user);
    db.Team.findAll({ where: { UserId: req.user.id }})
     .then(team => {
         res.render("team/index", 
         { 
             user: req.user,
             team: team
          });
     })
     .catch( err => {
        console.log(err);
        res.status(500).end;
     })
});


module.exports = router;