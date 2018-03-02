/*Express
burger.js
Create the router for the app, and export the router at the end of your file.*/

var express = require("express");
var burger = require("../models/burger.js");

var app= express();
var router=express.Router();



router.get("/", function(req, res) {
  burger.all(function(result) {
  	var obj = {
      burgers: result
    };
   res.render("index",obj);
  });
});

router.post("/api/burger", function(req, res) {
  console.log(req.body.name);
  burger.insert(["burger_name"],[req.body.name],
  function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition ="id = " + req.params.id;

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


/*if(result.changedRows === 3)
    {
      burger.delete(function(result){
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
          
        }
      }) ;
    }*/