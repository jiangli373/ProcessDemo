/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-17
 * Time: 下午1:20
 * To change this template use File | Settings | File Templates.
 */

var page = require('webpage').create();
page.open('http://www.easymorse.com', function () {
    page.render('image.png');
    phantom.exit();
});