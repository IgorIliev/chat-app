var expect = require ('expect');

var {generateMessage} = require ('./message');
var {generateLocationMessage} = require ('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'nekojsi';
    var text = 'nekoj tekst';
    var message = generateMessage (from, text);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toBe('nekojsi');
    expect(message.text).toBe('nekoj tekst');
  });
});

describe('generateLocationMessage', () =>{
  it('should generate correct location object', () =>{
      var from = 'nekojsi';
      var latitude = 1;
      var longitude = 1;
      var message = generateLocationMessage(from, latitude, longitude)

      expect(message.createdAt).toBeA('number');
      expect(message.from).toBe('nekojsi');
      expect(message.url).toBe(`https://www.google.com/maps?q=1,1`);
  });
});
