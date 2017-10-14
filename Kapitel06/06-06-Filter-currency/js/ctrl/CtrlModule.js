function ContentCtrl ( $scope, $log )
{
    $log.log ("ContentCtrl");

    $scope.price = 12.456789;

}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'ContentCtrl', ContentCtrl )
    ;
