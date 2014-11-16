/**
 * Return right word for English plural.
 * @param quantity Quantity.
 * @param one Word for one.
 * @param more Word for more.
 * @returns Word.
 */
function pluralEnglish(quantity,one,more) {
	return (quantity === 1) ? one : more;
}

/**
 * Shows English verbal clock.
 * @param id ID of the element where the clock is shown.
 */
function clockEnglish(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var output;
	
	output=(hour<10 ? "0" : "")+hour+" "+pluralEnglish(hour,"hour","hours")+" ";
	output+=(minute<10 ? "0" : "")+minute+" "+pluralEnglish(minute,"minute","minutes")+" ";
	output+=(second<10 ? "0" : "")+second+" "+pluralEnglish(second,"second","seconds");

	document.getElementById(id).innerHTML=output;
	setTimeout(function() {	clockEnglish(id); }, 1000);
}
