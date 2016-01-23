(function($){

 var ipServer = $("#ipServ").text();
 console.log(ipServer);

var socket = initSocket(ipServer)
 socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

})(jQuery);

function initSocket(addr) {
    //console.log('http://' + addr + ':3000/');
    //Connection au socket
    return io.connect('http://' + addr + ':3000/');
    //return io.connect('http://localhost:3000');
}
