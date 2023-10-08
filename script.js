$(function () {
    // click event listener for save buttons
    $(".saveBtn").on("click", function () {
      // Get user input from time-block
      var userInput = $(this).siblings(".description").val();
      
      // Get the hour from the id of the parent time-block
     } var hour = $(this).parent().attr("id");
  
      // Save user input in local storage using the hour as the key
      localStorage.setItem(hour, userInput);
    });