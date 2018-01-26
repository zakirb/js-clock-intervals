



//hour

var hourDegrees = 0;

var hour = document.getElementById("hour");


var hourTick = function() {
	hour.style.transform = "rotate(" + hourDegrees + "deg)";
	hourDegrees += 1;
};




//minute

var minuteDegrees = 0;

var minute = document.getElementById("minute");


var minuteTick = function() {
	minute.style.transform = "rotate(" + minuteDegrees + "deg)";
	minuteDegrees += 1;
};



//seconds


var secondDegrees = 0;

var second = document.getElementById("second");


var secondTick = function () {
	second.style.transform = "rotate(" + secondDegrees + "deg)";
	secondDegrees += 6;
};

var hourInterval = setInterval(hourTick, 120000);
var minuteInterval = setInterval(minuteTick, 10000);
var secondInterval = setInterval(secondTick, 1000);