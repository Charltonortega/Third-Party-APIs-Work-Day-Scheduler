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

  // Then call updateDateTime every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);

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
  
});

