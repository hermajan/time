/**
 * Shows clock.
 * @param id ID of the element where the clock is shown.
 * @return Clock in format [hour]:[minute]:[second].
 */
function clock(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();

	document.getElementById(id).innerHTML=(hour<10 ? "0" : "")+hour+(minute<10 ? ":0" : ":")+minute+(second<10 ? ":0" : ":")+second;
	setTimeout(function() {	clock(id); }, 1000);
}

/**
 * Shows clock with milliseconds.
 * @param id ID of the element where the clock is shown.
 * @return Clock in format [hour]:[minute]:[second].[millisecond].
 */
function clockMS(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var millisecond=date.getMilliseconds();

	document.getElementById(id).innerHTML=(hour<10 ? "0" : "")+hour+(minute<10 ? ":0" : ":")+minute+(second<10 ? ":0" : ":")+second+"."+millisecond;
	setTimeout(function() {	clockMS(id); }, 1);
}

/**
 * Shows 12-hour clock.
 * @param id ID of the element where the clock is shown.
 * @return Clock in format [hour]:[minute]:[second] [period].
 */
function clock12(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var period="a.m.";
	
	if(hour>=12) {
		hour-=12;
		period="p.m.";
	}
	if(hour===0) {
		hour=12;
	}
	
	document.getElementById(id).innerHTML=(hour<10 ? "0" : "")+hour+(minute<10 ? ":0" : ":")+minute+(second<10 ? ":0" : ":")+second+" "+period;
	setTimeout(function() {	clock12(id); }, 1000);
}

/**
 * Shows Unix time clock (number of seconds that have elapsed since 1. 1. 1970).
 * @param id ID of the element where the clock is shown.
 * @return Clock in format [second].
 */
function clockUnix(id) {
	var date=new Date;
	var time=date.getTime();

	document.getElementById(id).innerHTML=Math.floor(time/1000);
	setTimeout(function() {	clockUnix(id); }, 1000);
}
