// console.log('Hello, world!')
// phantom.exit()

var page = require('webpack').create();
page.open('https://www.baidu.com/', function (status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('./baidu.png');
  }
  phantom.exit();
});