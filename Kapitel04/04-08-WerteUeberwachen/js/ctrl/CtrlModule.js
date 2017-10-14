function ParentCtrl ( $scope, $log  )
{
    $scope.test = 0;
    $scope.add = function ()
    {
        $scope.test ++;
    }

}

function ChildCtrl( $scope, $log, $element ) {

    $scope.watchedVal = 0;

    var removeWatch = $scope.$parent.$watch( "test", function ( newVal, oldVal ) {
        $log.log ( oldVal );
        $log.info ( newVal );

        if ( newVal === 3 )
            removeWatch ();
        else
            $scope.watchedVal = newVal;
    } )

}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'ParentCtrl', ParentCtrl )
        .controller ( 'ChildCtrl', ChildCtrl )
    ;
