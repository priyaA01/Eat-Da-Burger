$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    //new burger value
    var newBurger = {
      name: $("#bn").val().trim()
    };

    // Send the POST request.submit
    $.ajax("/api/burger", {
      data: newBurger,
      type: "POST"
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      });

  });


  $(".devour").on("click", function (event) {
    event.preventDefault();
    
    var burgerId = $(this).data("burgerid");
    var burger = {
      id: burgerId,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + burgerId, {
      type: "PUT",
      data: burger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      });
  });
});