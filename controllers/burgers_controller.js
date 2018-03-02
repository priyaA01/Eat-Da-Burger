/*Router for the app*/

var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function (req, res) {
  burger.all(function (result) {
    var obj = {
      burgers: result
    };
    res.render("index", obj);
  });
});

router.post("/api/burger", function (req, res) {
  burger.insert(["burger_name"], [req.body.name],
    function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update(condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }

  });
});


router.delete("/api", function (req, res) {
  burger.del(
    function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;