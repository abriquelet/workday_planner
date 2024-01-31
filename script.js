// Wraps to ensure HTML is loaded
$(document).ready(function () {

  // Summons current date and places it within the header.
  let currentDate = dayjs();
  let dateFormat = currentDate.format('D MMMM YYYY'); // Fixed the date format
  let htmlDate = document.getElementById("currentDay");
  htmlDate.innerHTML = dateFormat;

  $(".saveBtn").click(function () {
    // Returns values stored in the text box and what time of day box it is associated with
    let storeTime = $(this).parent().attr("id");
    let storeText = $(this).siblings(".description").val();
    

    // Sends the input to local storage
    localStorage.setItem(storeTime, storeText);
  });
  // Function to add colors that correspond to the time of day
  // Applies CSS classes
  function timeCompare() {
    $(".time-block").each(function () {
      // Retrieves the hour
      let idAttribute = $(this).attr("id");
  
      // Check if the element has a valid id attribute
      if (idAttribute) {
        let timeBlock = parseInt(idAttribute.split("-")[1]);
  
        // Check time and apply appropriate CSS
        if (timeBlock == currentDate.hour()) {
          $(this).addClass("present");
          $(this).removeClass("future");
          $(this).removeClass("past");
        } else if (timeBlock < currentDate.hour()) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
        } else if (timeBlock > currentDate.hour()) {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
        }
      }
      
    });
  }
 // ensures items in local storage are placed in their intended locations 
  //when the user reloads the webpage.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


 // Call the timeCompare function to apply colors based on the time
  timeCompare();

});