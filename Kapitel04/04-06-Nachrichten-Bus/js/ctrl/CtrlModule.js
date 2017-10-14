function ContainerCtrl ( $scope, $log  )
{
    this.scope = $scope;
    $log.log ("ContainerCtrl initialized");
}

function LeftCtrl( $scope, $log, $element ) {
    this.scope = $scope;
    $log.log ("LeftCtrl initialized");


    var removeDestroyListener = $scope.$on ("$destroy", function () {
        $log.log ("ich habe die destroy Nachricht erhalten");
        $element.remove();
    } );

    $scope.remove = function () {
        $scope.$destroy();
    };

    //removeDestroyListener ();
}

function RightCtrl ( $scope, $log  )
{
    this.scope = $scope;
    $log.log ("RightCtrl initialized");
}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'ContainerCtrl', ContainerCtrl )
        .controller ( 'LeftCtrl', LeftCtrl )
        .controller ( 'RightCtrl', RightCtrl )
    ;
