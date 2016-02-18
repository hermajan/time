/**
 * Oudin's algorithm for calculating the date of Easter in the Gregorian calendar.
 * @param year Input year for calculating.
 * @return Array with date of the Easter Sunday in format [day, month, year].   
 **/
function easterSundayOudin(year) {
	var century = Math.floor(year / 100);
	var G = year % 19;
	var K = Math.floor((century - 17) / 25);
	var I = (century - Math.floor(century / 4) - Math.floor((century - K) / 3) + 19 * G + 15) % 30;
	I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - G) / 11));
	var J = (year + Math.floor(year / 4) + I + 2 - century + Math.floor(century / 4)) % 7;
	var L = I - J;
	var month = 3 + Math.floor((L + 40) / 44);
	var day = L + 28 - 31 * Math.floor(month / 4);

	return new Array(day, month, year);
}

function easterFriday(year) {
	var sunday = easterSundayOudin(year);
	var day = sunday[0] - 2;
	
	var friday=[day, sunday[1], year];
	if(day===0) {
		friday = [31, sunday[1] - 1, year];
	}
	if(day===-1) {
		friday = [30, sunday[1] - 1, year];
	}
	
	return friday;
}

function easterMonday(year) {
	var sunday = easterSundayOudin(year);
	var day = sunday[0] + 1;
	
	var monday=[day, sunday[1], year];
	if(day===32) {
		monday = [1, sunday[1] + 1, year];
	}
	
	return monday;
}
