var app = angular.module('app', [])

        .value("headline", "Überschrift")

        .run ( function ( $log, headline ) {
            $log.log ( "app started");
            document.getElementById( "preloader").innerHTML = "fertig ....";
            document.getElementById( "headline").innerHTML = headline;
        })
    ;
