$(document).ready(function() {
  // Function to update the current date and time
  function updateDateTime() {
    var now = dayjs();
    $("#currentDay").text(now.format('dddd, MMMM D, YYYY'));
    $("#currentTime").text(now.format('h:mm:ss A'));
  }

  // Call the updateDateTime function immediately to set the initial date and time
  updateDateTime();
  console.log("Initial date and time set.");

  // Call the updateDateTime function every second to keep the date and time updated
  setInterval(function() {
    updateDateTime();
    console.log("Date and time updated.");
  }, 1000);

  // Loop from 9a to 17(5p,) (for hours from 9AM to 5PM)
  for (var hour = 9; hour <= 17; hour++) {
    // Create a div for each hour
    var timeBlock = $('<div class="row time-block"></div>').attr('id', 'hour-' + hour);

    // Create a div for the hour label
    var hourLabel = hour <= 11 ? hour + 'AM' : hour === 12 ? '12PM' : hour - 12 + 'PM';
    var hourCol = $('<div class="col-2 col-md-1 hour text-center py-3"></div>').text(hourLabel);

    // Create a textarea for the event description
    var textareaCol = $('<textarea class="col-8 col-md-10 description" rows="3"></textarea>');

    // Create a save button
    var saveBtnCol = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>');
    var saveIcon = $('<i class="fas fa-save" aria-hidden="true"></i>');
    saveBtnCol.append(saveIcon);

    // Append the hour label, textarea, and save button to the time block
    timeBlock.append(hourCol, textareaCol, saveBtnCol);

    // Append the time block to the calendar container
    $("#calendarContainer").append(timeBlock);
  }
  console.log("Time blocks generated.");

  // Get the current hour
  var currentHour = dayjs().hour();
  // currentHour = 14; // Used to test code when working outside of current time

  // Perform actions on each time block
  $(".time-block").each(function() {
    // Get the hour from the time block's ID
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    // Apply appropriate class based on the current hour to indicate past, present, or future
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }

    // Get the saved event description from local storage
    var description = localStorage.getItem('hour-' + blockHour);

    // If a description exists, set it as the value of the textarea
    if (description) {
      $(this).find('textarea').val(description);
    }
  });

  // Event handler for save button click
  $(".saveBtn").click(function() {
    // Get the description from the corresponding textarea
    var description = $(this).siblings('textarea').val();

    // Get the ID of the parent time block
    var id = $(this).parent().attr('id');

    // Save the description in local storage using the ID as the key
    localStorage.setItem(id, description);
  });
});
