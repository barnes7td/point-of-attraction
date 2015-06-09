
// $('#start-button').click(function() {
//   $('#timer').text(Number($('#timer').text()) + 1); 
// });
var timer;
var timer2;
var timerIndex = 1;
var timeInterval = 3;
var timeMax = timeInterval * 4;
var numCounters = 4;
var finishMessage = timeMax + ' seconds - It has manifested!'

$(document).ready( function() { resetTimer() });

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
  if ( $(currentTimer()).text() == timeInterval.toString() ) {
    stopTimer();
    timerIndex += 1;
    createNewTimer();
  }else{
    addOne();
  }
}

function incrementMainTimer() {
  if ( $('#timer').text() == timeMax.toString() ) {
    stopTimer();
  }else{
    $('#timer').text(Number($('#timer').text()) + 1);
  }
}

function addOne() {
  $(currentTimer()).text(Number($(currentTimer()).text()) + 1);
}

function currentTimer() {
  return('#timer-' + timerIndex);
}

function startTimer() {
  if ($('#timer').text() == finishMessage) {
    resetTimer()
  }
  timer = setInterval( function() { incrementTimer() }, 1000);
  timer2 = setInterval( function() { incrementMainTimer() }, 1000);
}

function stopTimer() {
  $('#bell-tone').play();
  clearInterval(timer);
  clearInterval(timer2);
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

function createNewTimer() {
  if (timerIndex <= numCounters) {
    incrementMainTimer();
    $(currentTimer()).text("1");
    startTimer();
  } else {
    $('#timer').text(finishMessage);
  }
}
