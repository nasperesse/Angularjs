function ContentCtrl ( $scope, $log )
{
    //$log.log ("ContentCtrl");

    $scope.persons = [
            {
                "id": 1,
                "firstName": "Victoria",
                "lastName": "Thorndike",
                "gender": "female",
                "age": 30,
                "email": "victoria@dynarama.com"
            },
            {
                "id": 2,
                "firstName": "Kayla",
                "lastName": "WifKinson",
                "gender": "male",
                "age": 31,
                "email": "kayla@robotomic.com"
            },
            {
                "id": 3,
                "firstName": "Claire",
                "lastName": "Oldridge",
                "gender": "female",
                "age": 35,
                "email": "claire@xeicon.com"
            },
            {
                "id": 4,
                "firstName": "Katelyn",
                "lastName": "Chesterton",
                "gender": "male",
                "age": 35,
                "email": "katelyn@orthosoft.com"
            },
            {
                "id": 5,
                "firstName": "Vanessa",
                "lastName": "Harrison",
                "gender": "male",
                "age": 24,
                "email": "vanessa@syssoft.com"
            }
        ];


        $scope.getIteratingClass = function ( index )
        {
            var n = arguments.length - 1
            return arguments [ (index%n) + 1 ];
        }

}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'ContentCtrl', ContentCtrl )
    ;
