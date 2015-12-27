/**
 * Returns name day for a inputted date.
 * @param date JavaScript date.
 * @return Name day or empty string.
 */
function getName(date) {
	var month=date.getMonth();
	var day=date.getDate()-1;

	if((month<names.length) && (day<names[month].length)) {
		return names[month][day];
	}
	else {
		return null;
	}
}

/**
 * Returns name day for today.
 * @return Name day.
 */
function todayName() {
	var today=new Date();
	return getName(today);
}

/**
 * Returns name day for a inputted date.
 * @param day Number of a day.
 * @param month Number of a month.
 * @return Name day.
 */
function nameDay(day, month) {
	var date=new Date();
	if((day==null||day==0) && (month==null||month==0)) {
		day=date.getDate();
		month=date.getMonth()+1;
	}
	date.setDate(day);
	date.setMonth(month-1);
	return getName(date);
}
