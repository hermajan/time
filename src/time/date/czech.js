/**
 * Writes day of the week in word.
 * @return Day of the week in word.
 */
function denVtydnu() {
  var datum=new Date();
  var dny=new Array("neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota");
  document.write(dny[datum.getDay()]);
}
