var app = angular.module('app', ['app.ctrl' ])


        .run ( function ( $rootScope, $log ) {

            $rootScope.sendHelloWorldUpwards = function ()
            {
                $rootScope.$emit( "up", "hello world! from rootScope to me and my parents"  )
            }

            $rootScope.sendHelloWorldDownwards = function ()
            {
                $rootScope.$broadcast( "down", "hello world! from rootScope to me and my childs" )
            }

            $rootScope.$on ( "up", function ( event, val ) {
                $log.log( "receive up message in $rootScope ::: " + val );
                //$log.log ( event );
            })  ;

            $rootScope.$on ( "down", function ( event, val ) {
                $log.log( "receive down message in $rootScope ::: " + val  );
                //$log.log ( event );
            })  ;


        })
    ;
