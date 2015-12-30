/**
 * Writes date.
 * @return string Date in format [day].[month].[year].
 */
function dateJS() {
  var date=new Date();
  document.write(date.getDate()+". "+(date.getMonth()+1)+". "+date.getFullYear());
}
