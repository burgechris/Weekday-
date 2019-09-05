export function getDays(daysElapsed) {
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
  return daysMap.get((daysElapsed % 7)+1);
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

export function countLeapYear(year) {
  const startYear = 1900;
  let leapYearsTotal = 0;
  for (var i = startYear; i < year; i++) {
    if(isLeapYear(i)) {
      leapYearsTotal++
    }
  }
  return leapYearsTotal;
}

export function yearsToDays(year) {
  let days = 0;

  for (let i = 1900; i < year; i++) {
    if (isLeapYear(i)) {
      days += 366;
    } else {
      days += 365;
    }
  }
  return days;
}

export function daysElapsedInYear(month, day, year) {
  const calendarDays = [
    [1, 0],
    [2, 31],
    [3, 59],
    [4, 90],
    [5, 120],
    [6, 151],
    [7, 181],
    [8, 212],
    [9, 243],
    [10, 273],
    [11, 304],
    [12, 334],
  ];
  let monthMap = new Map(calendarDays);
  let days = 0;
  if (!(isLeapYear(year))) {
    days = monthMap.get(month) + day -1;
  } else if (month > 2){
    days = monthMap.get(month) + day;
  } else {
    days = monthMap.get(month) + day -1;
  }
  return days;
}

export function totalDaysElapsed(month, day, year) {
  let totalDays = 0;
  totalDays = daysElapsedInYear(month, day, year) + yearsToDays(year);
  return totalDays;
}
