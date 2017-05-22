function showTimer() {
document.getElementById("showTime").style.display = "block";
var endDate = new Date(document.getElementById("getDate").value).getTime();
var updateDate = setInterval(function() {updateTimer()} ,1000);

function updateTimer() {
    var currentDate = new Date().getTime();
    var distance = endDate - currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance <= 0) {
       clearInterval(updateDate);
       document.getElementById("showClock").innerHTML = "Expired";
   }
}
}


