'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var win = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});


app.on('ready', function() {  
  win = new BrowserWindow({width: 800, height: 600, frame: false});  
  win.loadUrl('file://' + __dirname + '/index.html');  
  win.on('closed', function() {
    win = null;
  });  
});

