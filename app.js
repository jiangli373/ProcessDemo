/**
 * Module dependencies.
 */
var express = require('express')
    , routes = require('./routes');
var app = express();

//使用child_process
var spawn = require('child_process').spawn;

// Configuration
app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});
// Routes

app.get('/', routes.index);
app.post('/cutcover', function (req, res) {
    var imageName = __dirname + '/public/images/img.jpg';

    //使用child_process
    var phantomjs = spawn('phantomjs', [__dirname + '/rasterize.js', req.body.weburl, imageName]);
    phantomjs.stdout.on('data', function (data) {
        console.log('stdout:' + data);
    });
    phantomjs.stderr.on('data', function (data) {
        console.log('stderr:' + data);
    });
    phantomjs.on('exit', function (code) {
        console.log('exit:' + code);
        res.send({'imgurl':imageName});
    });

});

app.listen(3000, function () {
    console.log("Express server listening");
});
