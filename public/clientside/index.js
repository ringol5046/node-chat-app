var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'lee',
    text: 'yep'
  });
});

socket.on('disconnect', function () {
  console.log('disconnceted from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});