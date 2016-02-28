/**
 * Writes date.
 * @param date JavaScript Date object.
 * @return string Date in format [day].[month].[year].
 */
function writeDate(date) {
	if(typeof date === "undefined") {
		var date = new Date();
	}
	document.write(date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear());
}
