/**
 * Created with JetBrains WebStorm.
 * User: wanzhang
 * Date: 12-10-16
 * Time: 下午4:01
 * To change this template use File | Settings | File Templates.
 */
process.on('message', function (m) {
    console.log('CHILD got message:', m);
});

process.send({ foo:'bar' });