// 配置路由
Router.route('/', function() {
    whatColor('red');
});
Router.route('/blue', function() {
    whatColor('blue');
});
Router.route('/green', function() {
    whatColor('green');
});

var cb= document.getElementById('cb')
// 定义一个方法
var whatColor=function (color) {
    cb.style.backgroundColor = color;
}