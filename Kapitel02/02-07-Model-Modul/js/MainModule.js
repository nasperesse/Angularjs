var app = angular.module('app', ['app.model'])


        .run ( function ( $log, Model ) {
            $log.log ( "app started");

            Model.setValue( "das ist ein Test" );

            document.getElementById( "preloader").innerHTML = Model.getSampleData();
            document.getElementById( "headline").innerHTML = Model.getValue() + " # " + Model.getConst();
        })
    ;
