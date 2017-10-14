var app = angular.module('app', [])

        .value("headline", "Überschrift")
        .value("headline", "angularJS")

        .constant("myConst", "rocks")
        .constant("myConst", "Konstante")

        .run ( function ( $log, headline, myConst ) {
            $log.log ( "app started");
            document.getElementById( "preloader").innerHTML = "fertig ....";
            document.getElementById( "headline").innerHTML = headline + " # " + myConst;
        })
    ;
