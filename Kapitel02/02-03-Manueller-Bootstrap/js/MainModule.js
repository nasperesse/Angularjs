var app = angular.module('app', [])
        .run ( function ( $log ) {
            $log.log ( "app started");
            document.getElementById( "preloader").innerHTML = "fertig ....";
        })
    ;
