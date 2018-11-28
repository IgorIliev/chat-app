var socket = io();

socket.on('connect', function () {
  console.log('povrzan na serverot');

});

socket.on('disconnect', function () {
  console.log('nepovrzan na serverot');
});

socket.on('newMessage', function (message) {
  console.log(`new mesage from: ${message.from}
    createdAt:${message.createdAt} : ${message.text}`);
});
