

var exec = require('child_process').exec;
var child;
//var request = require('request');


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var remote = require('socket.io')(server_url);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


// child = exec("echo 'This is being called from my node script'",function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

io.on('connection', function(socket){
    console.log('Client has connected');
    socket.on('client_message', function(msg){
        io.emit('client_message', "Client: "+msg);
    });
});