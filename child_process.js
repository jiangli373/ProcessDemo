/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-16
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */
var fork = require('child_process');

//使用fork
var sub = fork.fork(__dirname + '/sub.js');

sub.on('message', function (m) {
    console.log('PARENT got message:', m);
    sub.disconnect();
});

sub.send({ hello:'world' });

sub.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
