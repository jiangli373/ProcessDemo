/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-16
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */

var exec = require('child_process').exec


//使用exec
var ls = exec('ls -l /usr'); //command是一个完整的命令

ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);

});

ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
