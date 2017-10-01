var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'lee';
    var text = 'message';
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct loction object', () => {
    var from = 'lee';
    var latitude = 1;
    var longitude = 2;
    var url = 'https://www.google.com/maps?=1,2';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe('number');
    expect(message).toInclude({from, url});
  })
})