/**
 * Created by Angel on 12.10.17.
 */

function Controller($log, Model, $scope) {

    $log.warn(Model.getAdresse(1))

    $scope.daten = Model.getJason()

    $scope.name = ""
    $scope.alter =

    $scope.adresse = ""

    $scope.sex = ""

    $scope.email = ""

    $scope.test = "<strong>je fait just un petit test</strong>"

    $scope.remove = function () {



    };

    $scope.click = function () {


            $scope.daten.push({
                Name: $scope.name,
                Alter: $scope.alter,
                Sex: $scope.sex,
                Adresse: $scope.adresse,
                Email: $scope.email
            });

            $scope.name = "";
            $scope.alter =

                $scope.adresse = "";

            $scope.sex = "";

            $scope.email = "";





    }
}
 var controller = Controller.prototype;


var ctrl = angular.module('app.ctrl',['app.module'])

.controller("Controller", Controller);