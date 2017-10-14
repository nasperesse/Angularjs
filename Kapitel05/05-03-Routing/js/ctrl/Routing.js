app.config ( ['$routeProvider',
    function ( $routeProvider ){
        console.log ("config");

        $routeProvider.
            when ( '/about',    {templateUrl:'templates/about.html', controller: AboutCtrl }).
            when ( '/contact',    {templateUrl:'templates/contact.html', controller: ContactCtrl }).
            otherwise( {redirectTo: '/about' } )

    }]

);