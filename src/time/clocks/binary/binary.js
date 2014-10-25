/**
 * Shows binary clock.
 * @param id ID of the element where the clock is shown.
 */
function binaryClock(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var time=[new Number(hour).toString(2), new Number(minute).toString(2), new Number(second).toString(2)];

	for(var i=0; i<time.length; i++) {
		for(var j=time[i].length; j<6; j++) {
			time[i]="0"+time[i];
		}
	}
	
	var output=time[0]+":"+time[1]+":"+time[2];
	document.getElementById(id).innerHTML=output;
	setTimeout(function() { binaryClock(id); }, 1000);
}
