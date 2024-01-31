// Wraps to ensure HTML is loaded
$(document).ready(function () {

  // Summons current date and places it within the header.
  let currentDate = dayjs();
  let dateFormat = currentDate.format('D MMMM YYYY'); // Fixed the date format
  let htmlDate = document.getElementById("currentDay");
  htmlDate.innerHTML = dateFormat;

  $(".saveBtn").click(function () {
    // Returns values stored in the text box and what time of day box it is associated with
    let storeText = $(this).siblings(".description").val();
    let storeTime = $(this).parent().attr("id");
    
    // Console.log to verify it runs
    console.log(storeTime);
    console.log(storeText);

    // Sends the input to local storage
    localStorage.setItem(storeTime, storeText);
  });

  // Function to add colors that correspond to the time of day
  // Applies CSS classes
  function timeCompare() {
    $(".time-block").each(function () {
      // Retrieves the hour
      let timeBlock = parseInt($(this).attr("id").split("-")[1]); 
      // Check time and apply appropriate CSS
      //utilize .hour() to dom hop into the correct form of data to pull the correct css value. 
      if (timeBlock === currentDate.hour()) {
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
    });
  }

  // Call the timeCompare function to apply colors based on the time
  timeCompare();

});