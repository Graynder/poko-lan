(function($){

    var ipServer = $("#ipServ").text();
    var dataGame;

    var socket = initSocket(ipServer)

    socket.on('news', function (data) {
        console.log(data);
        dataGame = data;
    });

    var slide = $( "#slider-range-min" ).slider({
        range: "min",
        value: 0,
        min: 1,
        max: 700,
        slide: function( event, ui ) {
            $( "#Rise" ).text( "Rise " + ui.value + " €");
        }
    });

    $("#Fold").click(function() {
        console.log("fold");
        socket.emit("fold");

    });

    $("#Check").click(function() {
        console.log("check");
        socket.emit("check");

    });

    $("#Call").click(function() {
        console.log("call");
        socket.emit("call");

    });

    $("#Rise").click(function() {
        console.log("rise");
        socket.emit("rise");

    });

})(jQuery);

function initSocket(addr) {
    //Connection au socket
    return io.connect('http://' + addr + ':3000/');
}
