var values = angular.module('values', [])
        .value("headline", "angularJS...")
        .constant("myConst", "...rocks")
    ;

var app = angular.module('app', ['values'])


        .run ( function ( $log, headline, myConst ) {
            $log.log ( "app started");
            document.getElementById( "preloader").innerHTML = "fertig ....";
            document.getElementById( "headline").innerHTML = headline + " # " + myConst;
        })
    ;
