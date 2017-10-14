var app = angular.module( 'app', ['app.ctrl'])


        .run ( function ( $rootScope, $log ) {

            $log.log ("run application")

            $rootScope.$on("$routeChangeStart", function (next, current) {
                $log.info("$routeChangeStart");
                $log.info("next");
                $log.log(next);
                $log.info("current");
                $log.log(current);
            });


            $rootScope.$on("$routeChangeSuccess", function (event, current, previouse) {
                $log.info("$routeChangeSuccess");
                $log.info("event");
                $log.log(event);
                $log.info("current");
                $log.log(current);
                $log.info("previouse");
                $log.log(previouse);
            });

            $rootScope.$on("$routeChangeError", function (current, previouse, rejection) {
                $log.info("$routeChangeError");
                $log.info("current");
                $log.log(current);
                $log.info("previouse");
                $log.log(previouse);
                $log.info("rejection");
                $log.log(rejection);
            });

            $rootScope.$on("$routeUpdate", function () {
                $log.info("$routeUpdate");
            });
    })

    ;
