(function($){

  var ip = location.host;
  console.log(ip);

  var socket = io.connect(ip);

  /*socket.on('message', function (data) {
    if(data.message) {
      messages.push(data.message);
      var html = '';
      for(var i=0; i<messages.length; i++) {
        html += messages[i] + '<br />';
      }
      content.innerHTML = html;
    } else {
      console.log("There is a problem:", data);
    }
  });*/

})(jQuery);
