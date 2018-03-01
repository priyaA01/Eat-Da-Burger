$(function(){
  $(".submit").on("click", function(event) {
     event.preventDefault();
   
    var name = $(this).data("burger");

    // Send the POST request.
    $.ajax("/api/burger/" , {
      data : name,
      type: "POST"
   }).then(
      function() {
        console.log("Added Burger");
        // Reload the page to get the updated list
        location.reload();
        });

  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured =true;

    // Send the POST request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devoured
   }).then(
      function() {
        console.log("Burger");
        // Reload the page to get the updated list
        location.reload();
        });

  });

});