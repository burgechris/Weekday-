import { getDays } from '../src/weekday.js';

describe('dayConverter', function() {
  it('should get correct day string based on number from map', function() {
    var num = 1;
    expect(getDays(num)).toEqual('Monday');
  })
})
