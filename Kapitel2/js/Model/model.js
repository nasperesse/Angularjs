/**
 * Created by Angel on 10.10.17.
 */


var Model = function ($log, headline2, myConst1) {


    $log.log("Hello world.");

    return {

        getTemplate: function () {
            return "hello World";
        },

        getValue: function () {
            return headline2;
        },

        setValue: function (val) {
            headline2 = val;
        },

        getConst: function () {
            return myConst1;
        }

    }
};




var model = angular.module('app.model',[])
    .value("headline2", "Angularjs1")
    .constant("myConst1", "Ange Nasser")
    .factory("Model", Model);
