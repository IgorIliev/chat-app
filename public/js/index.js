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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage',{
      from: 'User',
      text: jQuery('[name=message]').val()
    }, function(){

    });
});
