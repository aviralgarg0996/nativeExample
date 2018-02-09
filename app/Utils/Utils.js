
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}





export function addDays(theDate, days) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}


 export function stringToDate(_date, _format, _delimiter) {
   var formatLowerCase = _format.toLowerCase();
   var formatItems = formatLowerCase.split(_delimiter);
   var dateItems = _date.split(_delimiter);
   var monthIndex = formatItems.indexOf("mm");
   var dayIndex = formatItems.indexOf("dd");
   var yearIndex = formatItems.indexOf("yyyy");
   var month = parseInt(dateItems[monthIndex]);
   month -= 1;
   var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
   return formatedDate;
 }