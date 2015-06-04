
// $('#start-button').click(function() {
//   $('#timer').text(Number($('#timer').text()) + 1); 
// });
var timer;
var timerIndex = 1;

$(document).on('click', '#start-button', function() { 
  startTimer();
});

$(document).on('click', '#stop-button', function() { 
  stopTimer();
});

$(document).on('click', '#reset-button', function() { 
  resetTimer();
});

function incrementTimer() {
  if ( $(currentTimer()).text() == "17") {
    stopTimer();
    timerIndex += 1;
    createNewTimer();
  }else{
    addOne();
  }
}

function addOne() {
  $(currentTimer()).text(Number($(currentTimer()).text()) + 1);
}

function currentTimer() {
  return('#timer-' + timerIndex);
}

function startTimer() {
  timer = setInterval( function() { incrementTimer() }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  timerIndex = 1;
  $('#timer-1').text("0");
  $('#timer-2').remove();
  $('#timer-3').remove();
  $('#timer-4').remove();
  $('#finish').remove();
}

function createNewTimer() {
  if (timerIndex < 5) {
    $('#timers-container').append('<h1 id="timer-' + timerIndex + '">1</h1>');
    startTimer();
  } else {
    $('#timers-container').append('<h1 id="finish"> 68 seconds - It has manifested! </h1>');
  }
}
