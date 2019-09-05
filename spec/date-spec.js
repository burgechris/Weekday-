import { getDays, isLeapYear, countLeapYear, yearsToDays, daysElapsedInYear, totalDaysElapsed } from '../src/weekday.js';

describe('dayConverter', function() {
  it('should get correct day string based on number from map', function() {
    let daysElapsed = 1;
    expect(getDays(daysElapsed)).toEqual('Tuesday');
  })
  it('should get correct day string based on number from map', function() {
    let num = 7;
    expect(getDays(num)).toEqual('Monday');
  })
})

describe('modDays', function() {
  it('should get correct day based on the number of days', function() {
    let num = 10;
    expect(getDays(num)).toEqual('Thursday');
  })
})

describe('test whether isLeapYear function gives correct output', function() {
  it('should be a leap year if the year is divisible by 400', function() {
    let year = 2000;
    expect(isLeapYear(year)).toEqual(true);
  })
  it('should not be a leap year if the year is divisible by 100', function() {
    let year = 1900;
    expect(isLeapYear(year)).toEqual(false);
  })
  it('should not be a leap year if the year is divisible by 4', function() {
    let year = 1904;
    expect(isLeapYear(year)).toEqual(true);
  })
})

describe('test how many leap years are in a year range', function() {
  it('should return the number of leap years from 1900 to year', function() {
  let year = 1937;
  expect(countLeapYear(year)).toEqual(9);
  })
})

describe('test that a year range gives correct output of days', function() {
  it('should correctly output the number of days in a year range', function() {
    let year = 1905;
    expect(yearsToDays(year)).toEqual(1826);
  })
})

describe('test that we can get the correct day of the work for January 1 for any year after 1900', function() {
  it('should return the day of the week for January 1 for any year', function() {
    let year = 1901;
    expect(getDays(yearsToDays(year))).toEqual('Tuesday');
  })
})

describe('test the number of days elapsed in the current year', function() {
  it('should return the number of days if in the first month',function() {
    let year = 1900;
    let month = 1;
    let day = 14;
    expect(daysElapsedInYear(month, day, year)).toEqual(13);
  })
  it('should return the number of days elaspsed for a leap year if the date is after Feb',function() {
    let year = 1904;
    let month = 12;
    let day = 31;
    expect(daysElapsedInYear(month, day, year)).toEqual(365);
  })
  it('should return the number of days and not add leasp day if not a leap year',function() {
    let year = 1903;
    let month = 12;
    let day = 31;
    expect(daysElapsedInYear(month, day, year)).toEqual(364);
  })
})

describe('test that totalDaysElapsed computes correctly', function() {
  it('tests that a date computes the correct day of week', function(){
    let month = 4;
    let day = 28;
    let year = 1995;
    expect(getDays(totalDaysElapsed(month, day, year))).toEqual('Friday');
  })

})
