var socket = io();

socket.on('connect', function () {
  console.log('povrzan na serverot');

  socket.emit('createMessage', {
    from: 'nekoj nov',
    text: 'nekoja poraka'
  });

});

socket.on('disconnect', function () {
  console.log('nepovrzan na serverot');
});

socket.on('newMessage', function (message) {
  console.log(`new mesage from ${message.from} : ${message.text}`);
});
