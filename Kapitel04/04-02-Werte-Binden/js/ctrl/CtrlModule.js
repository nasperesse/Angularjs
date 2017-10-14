function Controller ( $scope, $log , Model )
{
    $scope.sayHello = "hello world!";
    $scope.sayHelloHTML = "<strong>Hello World</strong>";

    $log.log ( $scope );
}

var p = Controller.prototype;


var ctrl = angular.module('app.ctrl', ['app.model'])
        .controller ( 'Controller', Controller )
    ;
