function Controller ( $scope, $log , Model )
{
    $log.log ( $scope );
}

var p = Controller.prototype;


var ctrl = angular.module('app.ctrl', ['app.model'])
        .controller ( 'Controller', Controller )
    ;
