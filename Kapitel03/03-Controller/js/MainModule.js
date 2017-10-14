var app = angular.module('app', ['app.model'])


        .run ( function ( $log, Model ) {

            Model.setValue( "Modelwert setzen" );

            document.getElementById( "preloader").innerHTML = Model.getSampleData();
            document.getElementById( "headline").innerHTML = Model.getValue() + "<br />" + Model.getConst();
        })
    ;
