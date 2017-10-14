/**
 * Created by Angel on 09.10.17.
 */


function myFirstCtrl( $scope)
{

       $scope.myVariable ="Angularjs ist cool";

       $scope.persons = [{name: "Ange", age:10},
                         {name: "Marie", age:45},
                         {name: "Carlos", age:22},
                         {name: "Mateb", age:25},
                         {name: "Jaures", age:27},
                         {name: "Modjo", age:30}
                        ];


       $scope.name = "Francis";
       $scope.age = 12


       $scope.click = function () {

          $scope.persons.push({name:$scope.name, age:$scope.age});
       }
}
