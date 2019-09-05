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
  let leapYear = false;
  if (year % 400 === 0) {
    leapYear = true;
  } else if(year % 100 === 0){
    leapYear = false;
  } else if(year % 4 === 0){
    leapYear = true;
  }
  return leapYear;
}
