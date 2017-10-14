var app = angular.module('app', ['app.model', 'app.ctrl' ])


        .run ( function ( $rootScope, $log, Model ) {

            Model.setValue( Math.floor( Math.random() * 100 ) );

            $rootScope.version = Model.getVersion();

            $rootScope.setUp = function ()
            {
                Model.setValue( Model.getValue() + 1 );
            }

        })
    ;
