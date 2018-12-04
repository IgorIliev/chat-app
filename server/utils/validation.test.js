const expect = require('expect');

var {isRealString} = require ('./validation');


describe('isRealString', () => {
  it('should reject non string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () =>{
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should acept string valid string', () =>{
    var res = isRealString(' string dtring   ');
    expect(res).toBe(true);
  });

});
