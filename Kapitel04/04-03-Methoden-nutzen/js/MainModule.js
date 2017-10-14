var app = angular.module('app', ['app.model', 'app.ctrl' ])


        .run ( function ( $log, Model ) {

            Model.setValue( Math.floor( Math.random() * 100 ) );

        })
    ;
