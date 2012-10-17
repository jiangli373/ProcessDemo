/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-17
 * Time: 下午2:02
 * To change this template use File | Settings | File Templates.
 */
function foo() {
    console.log('foo');
}

process.nextTick(foo);
console.log('bar');