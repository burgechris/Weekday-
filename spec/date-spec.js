import { getDays, isLeapYear, countLeapYear, yearsToDays } from '../src/weekday.js';

describe('dayConverter', function() {
  it('should get correct day string based on number from map', function() {
    var num = 1;
    expect(getDays(num)).toEqual('Monday');
  })
})

describe('modDays', function() {
  it('should get correct day based on the number of days', function() {
    var num = 10;
    expect(getDays(num)).toEqual('Wednesday');
  })
})

describe('test whether isLeapYear function gives correct output', function() {
  it('should be a leap year if the year is divisible by 400', function() {
    var year = 2000;
    expect(isLeapYear(year)).toEqual(true);
  })
  it('should not be a leap year if the year is divisible by 100', function() {
    var year = 1900;
    expect(isLeapYear(year)).toEqual(false);
  })
  it('should not be a leap year if the year is divisible by 4', function() {
    var year = 1904;
    expect(isLeapYear(year)).toEqual(true);
  })
})

describe('test how many leap years are in a year range', function() {
  it('should return the number of leap years from 1900 to year', function() {
  var year = 1937;
  expect(countLeapYear(year)).toEqual(9);
  })
})

describe('test that years can be correctly translated in days and day of week outputted', function(){
  it('should correclty output day of week for whole years', function() {
    let year = 1905;
    expect(yearsToDays(year)).toEqual(1826);
  })
})
