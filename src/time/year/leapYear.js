/**
 * Checks if the year is leap.
 * @param year Input year.
 * @returns True if the year is leap, false otherwise.
 */
function leapYear(year) {
    if((year%4) !== 0) {
        return false;
    } else if((year%100) !== 0) {
        return true;
    } else if((year%400) !== 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Checks if the year is leap using JavaScript Date object.
 * @param year Input year.
 * @returns True if the year is leap, false otherwise.
 */
function leapYear2(year) {
	return new Date(year, 1, 29).getMonth() === 1;
}
