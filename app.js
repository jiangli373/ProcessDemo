/**
 * Module dependencies.
 */
var express = require('express')
    , routes = require('./routes');
var app = express();
//使用node-webshot
var webshot = require('webshot');
var options = {
}
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
    //使用node-webshot
    webshot(req.body.weburl, imageName, options, function (err) {
        if (err) return console.log(err);
        res.send({'imgurl':imageName});
    });

});

app.listen(3000, function () {
    console.log("Express server listening");
});
