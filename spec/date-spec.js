import { getDays, isLeapYear } from '../src/weekday.js';

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

describe('leapYear', function() {
  it('it should be a leap year if the year is divisible by 400', function() {
    var year = 2000;
    expect(isLeapYear(year)).toEqual(true);
  })
  it('it should not be a leap year if the year is divisible by 100', function() {
    var year = 1900;
    expect(isLeapYear(year)).toEqual(false);
  })
  it('should not be a leap year if the year is divisible by 4', function() {
    var year = 1904;
    expect(isLeapYear(year)).toEqual(true);
  })

})
