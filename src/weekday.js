export function getDays(num) {
  const days = [
     [1, 'Monday'],
     [2, 'Tuesday'],
     [3, 'Wednesday'],
     [4, 'Thursday'],
     [5, 'Friday'],
     [6, 'Saturday'],
     [7, 'Sunday']
   ];

  var daysMap = new Map(days)
  return daysMap.get(num % 7);
}
export function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
}
