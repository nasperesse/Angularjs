function WrapperCtrl ( $scope, $log )
{
    $scope.temp = "templates/home.html";

    $scope.openContact = function ()
    {
        $scope.temp = "templates/contact.html";
    }
}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'WrapperCtrl', WrapperCtrl )
    ;
