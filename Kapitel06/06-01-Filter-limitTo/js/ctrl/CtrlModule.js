function ContentCtrl ( $scope, $log )
{
    $log.log ("ContentCtrl");

    $scope.persons = [
        {
            "id": 1,
            "firstName": "Mackenzie",
            "lastName": "Hodges",
            "gender": "female",
            "age": 30,
            "email": "mackenzie@multitiqua.com"
        },
        {
            "id": 2,
            "firstName": "Aaliyah",
            "lastName": "Hailey",
            "gender": "male",
            "age": 21,
            "email": "aaliyah@polytheon.com"
        },
        {
            "id": 3,
            "firstName": "Lillian",
            "lastName": "Goodman",
            "gender": "female",
            "age": 27,
            "email": "lillian@ienland.com"
        },
        {
            "id": 4,
            "firstName": "Gabrielle",
            "lastName": "Warren",
            "gender": "male",
            "age": 25,
            "email": "gabrielle@infraique.com"
        },
        {
            "id": 5,
            "firstName": "Layla",
            "lastName": "Ogden",
            "gender": "male",
            "age": 27,
            "email": "layla@rapigrafix.com"
        },
        {
            "id": 6,
            "firstName": "Maya",
            "lastName": "Turner",
            "gender": "male",
            "age": 28,
            "email": "maya@polytheon.com"
        },
        {
            "id": 7,
            "firstName": "Brooklyn",
            "lastName": "Oldridge",
            "gender": "male",
            "age": 21,
            "email": "brooklyn@superscope.com"
        },
        {
            "id": 8,
            "firstName": "Brooklyn",
            "lastName": "Fulton",
            "gender": "female",
            "age": 22,
            "email": "brooklyn@infoairway.com"
        },
        {
            "id": 9,
            "firstName": "Isabella",
            "lastName": "Gate",
            "gender": "female",
            "age": 22,
            "email": "isabella@esteganoergy.com"
        },
        {
            "id": 10,
            "firstName": "Peyton",
            "lastName": "Oliver",
            "gender": "female",
            "age": 33,
            "email": "peyton@dynarama.com"
        },
        {
            "id": 11,
            "firstName": "Jocelyn",
            "lastName": "Oldman",
            "gender": "male",
            "age": 24,
            "email": "jocelyn@netseco.com"
        },
        {
            "id": 12,
            "firstName": "Gianna",
            "lastName": "Conors",
            "gender": "male",
            "age": 33,
            "email": "gianna@unologic.com"
        },
        {
            "id": 13,
            "firstName": "Destiny",
            "lastName": "Conors",
            "gender": "male",
            "age": 23,
            "email": "destiny@systheon.com"
        },
        {
            "id": 14,
            "firstName": "Sophie",
            "lastName": "Ford",
            "gender": "female",
            "age": 25,
            "email": "sophie@us omnigraphik.com"
        },
        {
            "id": 15,
            "firstName": "Serenity",
            "lastName": "Molligan",
            "gender": "male",
            "age": 35,
            "email": "serenity@fibrotouch.com"
        },
        {
            "id": 16,
            "firstName": "Makayla",
            "lastName": "Ford",
            "gender": "male",
            "age": 40,
            "email": "makayla@polytheon.com"
        },
        {
            "id": 17,
            "firstName": "Melanie",
            "lastName": "Sherlock",
            "gender": "female",
            "age": 37,
            "email": "melanie@robocomm.com"
        },
        {
            "id": 18,
            "firstName": "Kylie",
            "lastName": "Gilson",
            "gender": "female",
            "age": 38,
            "email": "kylie@entcast.com"
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
