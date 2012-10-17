/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-16
 * Time: 下午2:44
 * To change this template use File | Settings | File Templates.
 */

process.on('exit', function () {
    process.nextTick(function () {
        console.log('这个函数不会执行');
    });
    console.log('退出了');
});

for(var i = 0;i<10;i++){
    process.stdout.write("i:   "+i+ '\n');//console.log();

   if(i>5){
       process.exit();
   }
}