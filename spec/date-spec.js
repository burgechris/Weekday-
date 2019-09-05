import { getDays } from '../src/weekday.js';

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
