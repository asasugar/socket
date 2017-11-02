var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('static'));
io.on('connection', function (socket) {
  socket.on('pay', function(msg){//服务端监听支付成功事件
    console.log('message: ' + msg);
    io.emit('jump', '跳转');//服务端发送跳转命令事件
  });
});
http.listen(3000, function () {
  console.log('listening on:3000');
});