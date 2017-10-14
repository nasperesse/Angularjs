/**
 * Created by Angel on 09.10.17.
 */


//module erstellen


/** $log um anzuzeigen wenn der Konsole vorhanden ist**/
var app =angular.module('app',['app.model'])


    .run(function ($log, Model) { // variable per DI übergeben

        console.log("module loaded");

        document.querySelector("#preloader").innerHTML = Model.getTemplate()+""+Model.getValue()+" "+Model.getConst();

        Model.setValue("change de Variable");


        document.querySelector("#headline").innerHTML = Model.getValue();

    });
