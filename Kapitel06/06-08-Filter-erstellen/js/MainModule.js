var app = angular.module( 'app', ['app.ctrl', 'app.filter'])


        .run ( function ( $rootScope, $log ) {

            $log.log ("run app")

        })

    ;
