/**
 * Writes date.
 * @param date JavaScript Date object.
 * @return string Date in format [day].[month].[year].
 */
function writeDate(date) {
	if(typeof date === "undefined") {
		date = new Date();
	}
	document.write(date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear());
}

/** 
 * Writes day of the week in word.
 * @param lang Language.
 * @param date JavaScript Date object.
 * @return Day of the week in word.
 */
function dayOfWeek(lang, date) {
	if(typeof date === "undefined") {
		date = new Date();
	}

	return lang[date.getDay()];
}
