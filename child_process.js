/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-16
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */
var child = require('child_process');
var spawn = require('child_process').spawn;
var fork = require('child_process');
var exec = require('child_process').exec

  //使用 spawn
//var  ls  = spawn('ls', ['-lh', '/usr']);//command是命令,[]中是执行命令的参数
  //使用exec
//var  ls  = exec('ls -l '); //command是一个完整的命令

//ls.stdout.on('data', function (data) {
//    console.log('stdout: ' + data);
//    ls.disconnect();
//});

//ls.stderr.on('data', function (data) {
//    console.log('stderr: ' + data);
//
//});

//ls.on('exit',function(code){
//    console.log('child process exited with code ' + code);
//});

//使用fork
//var  sub  = fork.fork(__dirname + '/sub.js');
//sub.on('message', function(m) {
//    console.log('PARENT got message:', m);
////    sub.disconnect();
//});
//sub.send({ hello: 'world' });
//sub.on('exit', function (code) {
//    console.log('child process exited with code ' + code);
//});

var ls = fork.fork('ls', ['-lh', '/usr']);
ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    ls.disconnect();
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);

});

ls.on('exit',function(code){
    console.log('child process exited with code ' + code);
});