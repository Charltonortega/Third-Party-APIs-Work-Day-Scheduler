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


});
