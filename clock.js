
//used stack overflow to find code block below since I don't understand the Date object or its uses

var now = new Date(),
    then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0);
    var msSinceMidnight = now.getTime() - then.getTime(); // difference in millisecond
//-------------------------------------------------------------

var hourStartingDegrees = (msSinceMidnight % 43200000) / 120000;

var minuteStartingDegrees = (msSinceMidnight % 3600000) / 10000;


var secondStartingDegrees = (msSinceMidnight % 60000) * 6 / 1000;





//hour

var hourDegrees = hourStartingDegrees;

var hour = document.getElementById("hour");
hour.style.transform = "rotate(" + hourDegrees + "deg)"; //used to set to current time without interval delay


var hourTick = function() {
	hour.style.transform = "rotate(" + hourDegrees + "deg)";
	hourDegrees += 1;
};




//minute

var minuteDegrees = minuteStartingDegrees;

var minute = document.getElementById("minute");
minute.style.transform = "rotate(" + minuteDegrees + "deg)"; //used to set to current time without interval delay


var minuteTick = function() {
	minute.style.transform = "rotate(" + minuteDegrees + "deg)";
	minuteDegrees += 1;
};



//seconds


var secondDegrees = secondStartingDegrees;

var second = document.getElementById("second");
second.style.transform = "rotate(" + secondDegrees + "deg)"; //used to set to current time without interval delay


var secondTick = function () {
	second.style.transform = "rotate(" + secondDegrees + "deg)";
	secondDegrees += 6;
};

var hourInterval = setInterval(hourTick, 120000);
var minuteInterval = setInterval(minuteTick, 10000);
var secondInterval = setInterval(secondTick, 1000);