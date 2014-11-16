/**
 * Return right word for Czech plural.
 * @param quantity Quantity.
 * @param one Word for one.
 * @param two Word for two.
 * @param more Word for more.
 * @returns Word.
 */
function pluralCzech(quantity, one, two, more) {
	return (quantity < 1 || quantity > 4) ? more : ((quantity > 1) ? two : one);
}
	
/**
 * Shows Czech verbal clock.
 * @param id ID of the element where the clock is shown.
 */
function clockCzech(id) {
	var date=new Date;
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var output;
	
	output=(hour<10 ? "0" : "")+hour+" "+pluralCzech(hour,"hodina","hodiny","hodin")+" ";
	output+=(minute<10 ? "0" : "")+minute+" "+pluralCzech(minute,"minuta","minuty","minut")+" ";
	output+=(second<10 ? "0" : "")+second+" "+pluralCzech(second,"sekunda","sekundy","sekund");

	document.getElementById(id).innerHTML=output;
	setTimeout(function() {	clockCzech(id); }, 1000);
}

