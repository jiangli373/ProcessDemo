/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-16
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */
var spawn = require('child_process').spawn;

//使用 spawn
var  ls  = spawn('ls', ['-lh', '/usr']);//command是命令,[]中是执行命令的参数

ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit',function(code){
    console.log('child process exited with code ' + code);
});

