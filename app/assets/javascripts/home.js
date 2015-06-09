
// $('#start-button').click(function() {
//   $('#timer').text(Number($('#timer').text()) + 1); 
// });
var timer;
var timerMain;
var timerIndex = 1;
var timeInterval = 17; // This should be 17
var timeMax = timeInterval * 4;
var numCounters = 4;
var finishMessage = timeMax + ' seconds - It has manifested!'
var audio = new Audio('assets/196107__aiwha__bell.wav');
var newVolume = 1.0;

$(document).ready( function() { resetTimer() });

$(document).on('click', '#start-button', function() { 
  startTimer();
});

$(document).on('click', '#stop-button', function() { 
  stopTimer(timer);
  stopTimer(timerMax);
});

$(document).on('click', '#reset-button', function() { 
  resetTimer();
});

function startTimer(timer) {
  if ($('#timer').text() == finishMessage) {
    resetTimer();
  }
  runTimers();
}

function stopTimer(timer) {
  clearInterval(timer);
}

function resetTimer() {
  timerIndex = 1;
  $('#timer').text("0");
  $('#timer-1').text("0");
  $('#timer-2').text(" ");
  $('#timer-3').text(" ");
  $('#timer-4').text(" ");
  $('#finish').text(" ");
}

function runTimers() {
  timer = setInterval( function() { incrementTimer() }, 1000);
  timerMax = setInterval( function() { incrementMainTimer() }, 1000);
}

function incrementTimer() {
  if ( $(currentTimer()).text() != timeInterval.toString() ) {
    $(currentTimer()).text(Number($(currentTimer()).text()) + 1);
  }else{
    stopTimer(timer);
    createNewTimer(timer);
  }
}

function incrementMainTimer() {
  if ( $('#timer').text() != timeMax.toString() ) {
    $('#timer').text(Number($('#timer').text()) + 1);
  } else {
    audio.play();
    setTimeout( function() { audio.pause() }, 2800); 
    stopTimer(timerMax);
  }
}

function currentTimer() {
  return('#timer-' + timerIndex);
}

function createNewTimer() {
  timerIndex += 1;
  if (timerIndex <= numCounters) {
    $(currentTimer()).text("1");
    timer = setInterval( function() { incrementTimer() }, 1000);
  } else {
    $('#timer').text(finishMessage);
  }
}
