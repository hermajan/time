/**
 * Shows binary-coded decimal clock.
 * @param id ID of the element where the clock is shown.
 */
function bcdClock(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();

	var digits=[Math.floor(hour/10), (hour%10), Math.floor(minute/10), (minute%10), Math.floor(second/10), (second%10)];

	var digitsBCD=[];
	for(var i=0; i<digits.length; i++) {
		digitsBCD[i]=new Number(digits[i]).toString(2);
		for(var j=digitsBCD[i].length; j<4; j++) {
			digitsBCD[i]="0"+digitsBCD[i];
		}
	}

	var output=digitsBCD[0]+" "+digitsBCD[1]+":"+digitsBCD[2]+" "+digitsBCD[3]+":"+digitsBCD[4]+" "+digitsBCD[5];
	document.getElementById(id).innerHTML=output;
	setTimeout(function() {	bcdClock(id); }, 1000);
}
