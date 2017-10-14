app.config ( ['$routeProvider',
    function ( $routeProvider ){
        console.log ("config");

        $routeProvider.
            when ( '/home/:name',    {templateUrl:'templates/home.html', controller: HomeCtrl, reloadOnSearch:true  }).
            when ( '/about',    {templateUrl:'templates/about.html', controller: AboutCtrl }).
            when ( '/contact',    {templateUrl:'templates/contact.html', controller: ContactCtrl}).
            otherwise( {redirectTo: '/home/Gast' } )

    }]

);