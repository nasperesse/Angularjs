function AboutCtrl ( $scope, $log  )
{
    $log.log ("AboutCtrl");
}
function ContactCtrl ( $scope, $log  )
{
    $log.log ("ContactCtrl");
}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'AboutCtrl', AboutCtrl )
        .controller ( 'ContactCtrl', ContactCtrl )
    ;
