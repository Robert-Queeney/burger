const express = require("express"); 
const burger = require("../models/burgers"); 
const router = express.Router();

router.get("/burgers", function (req, res){
    burger.allBurgers(function(data){
        console.log(res); 
        // res.render() goes to index once i build it
    })
})

router.post("/api/burgers" , function (req, res){
    burger.createBurgers(function(data){
        console.log(res); 
    })
})

router.get("/", (req,res) => {
	res.render("index");
})

module.exports = router;