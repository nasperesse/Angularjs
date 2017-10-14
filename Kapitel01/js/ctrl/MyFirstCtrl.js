function MyFirstCtrl ( $scope )
{
    $scope.myVariable = "angularJS rocks";

    $scope.persons = [  {name: "hans1", age:18},
                        {name: "hans2", age:28},
                        {name: "saban", age:38},
                        {name: "hans3", age:48}/*,
                        {name: "hans4", age:58}*/
                     ];

    $scope.getPersonsLength = function ()
    {
        return $scope.persons.length;
    };


    $scope.name = "Saban";
    $scope.age = 12;

    $scope.click = function () {
        //alert ("hello wolrd") ;
        $scope.persons.push ( {name: $scope.name, age: $scope.age} );
    };


}