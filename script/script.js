var countDownDate = new Date("Jun 5, 2024 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = day + " ";

  document.getElementById("hour").innerHTML = hour + " ";

  document.getElementById("minute").innerHTML = minute + " ";

  document.getElementById("second").innerHTML = second + " ";


})