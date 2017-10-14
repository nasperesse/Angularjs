/**
 * Created by Angel on 10.10.17.
 */


var app = angular.module('app', ["app.model"])

.run(function ($log, Model, jason) {

    $log.log("test");

  document.querySelector("#kunde_name").innerHTML= Model.getName(1);


});


