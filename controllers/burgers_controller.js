/*Express
burger.js
Create the router for the app, and export the router at the end of your file.*/

var express = require("express");
var burger = require("../models/burger.js");

var app= express();
var router=express.Router();



router.get("/index", function(req, res) {
  burger.all(function(result) {
  	var obj = {
      burgers: result
    };
    // Send back the ID of the new quote
    res.render("index",obj);
  });
});

router.post("/api/burger", function(req, res) {
  console.log(req.body.name);
  burger.insert(req.body.name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.id });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = req.params.id;

	burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;