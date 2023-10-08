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
     // Get the current hour using Day.js
  var currentHour = dayjs().format("H");

  // Loop through each time block
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the block's hour with the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
