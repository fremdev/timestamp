const expect = require('expect');

const {getTimestampObj} = require('./timestamp');

describe('getTimestampObj', () => {

  it('should return an object with data if input is a timestamp', () => {
    const obj = getTimestampObj('1450137600');
    expect(obj.unix).toBe(1450137600);
    expect(obj.natural).toBe('December 15, 2015');
  });

  it('should return an object with data if input is a natural language date', () => {
    const obj = getTimestampObj('December 15, 2015');
    expect(obj.unix).toBeA('number');
    expect(obj.natural).toBe('December 15, 2015');
  });

  it('should return null for properties if input is not valid', () => {
    const obj = getTimestampObj('Try this one');
    expect(obj.unix).toBe(null);
    expect(obj.natural).toBe(null);
  });
});
