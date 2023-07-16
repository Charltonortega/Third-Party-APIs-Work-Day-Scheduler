var currentTime = dayjs().format('HH:mm:ss');
console.log('Current time:', currentTime);

$(document).ready(function() {
  // This function updates the text of the element with ID "currentDay" to the current date and time.
  function updateDateTime() {
    var now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    $("#currentDay").text(now);
    
  }

  // Call updateDateTime immediately to set the initial date and time
  updateDateTime();
  console.log("Initial date and time set.")

  // Then call updateDateTime every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);
  console.log("Date and time updated")

    // Loop from 9a to 17(5p,) (for hours from 9AM to 5PM)
    for (var hour = 9; hour <= 17; hour++) {
      // Create a div for each hour
      var timeBlock = $('<div class="row time-block"></div>').attr('id', 'hour-' + hour);
  
      var hourLabel = hour <= 11 ? hour + 'AM' : hour === 12 ? '12PM' : hour - 12 + 'PM';
      
      var hourCol = $('<div class="col-2 col-md-1 hour text-center py-3"></div>').text(hourLabel);
      //
      var textareaCol = $('<textarea class="col-8 col-md-10 description" rows="3"></textarea>');
      var saveBtnCol = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>');
      // saveicon asigned to class "fas fa-save"
      var saveIcon = $('<i class="fas fa-save" aria-hidden="true"></i>');
      // Appends elements in the DOM - hourCol, textareaCol, saveBtnCol appned to timeBlock, then append to #calendarContainer
      saveBtnCol.append(saveIcon);
      timeBlock.append(hourCol, textareaCol, saveBtnCol);
      $("#calendarContainer").append(timeBlock);
    }
  
// Get the current hour
var currentHour = dayjs().hour();
// currentHour = 14 - Used to test code when working out of current time

// Perform over each time block
  $(".time-block").each(function() {
    // Get the hour from the time block's ID
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // Apply appropriate class based on the current hour to indicate past, present, or future
      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      }
      else {
        $(this).removeClass('past present').addClass('future');
      }

// Get the saved event description from local storage - saved on local storage 
    var description = localStorage.getItem('hour-' + blockHour);

// If a description exists, set it as the value of the textarea
    if (description) {
      $(this).find('textarea').val(description);
    }
  });

});


