var expect = require ('expect');

var {generateMessage} = require ('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'nekojsi';
    var text = 'nekoj tekst'
    var message = generateMessage (from, text);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toBe('nekojsi');
    expect(message.text).toBe('nekoj tekst');
  });
});
