const express = require('express');
const router = express.Router();

// const bodyparser = require('body-parser');
const posts = require("../model/posts");

router.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts.getall()))
})

router.post("/new",express.json({ extended: true}), (req,res)=>{

    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title,description);



    res.send("Post adicionado com sucesso !")
})


module.exports = router;