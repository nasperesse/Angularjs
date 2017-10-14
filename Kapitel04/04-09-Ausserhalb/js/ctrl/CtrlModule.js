function Controller ( $scope, $log  )
{
    $scope.prop = "Wert im Scope";

    $scope.click = function ()
    {
        $scope.prop = "Wert geändert";

        setTimeout( function ()
        {


            $scope.$apply( function ()
            {
                $scope.prop = "Wert wieder geändert";
            })


            //$scope.$apply();

        }, 500 );


    }
    /*
    this.val = "World!"
    this.sayHello();

    var that = this;
    var fct = function ()
    {
        that.sayHello();
    }
    setTimeout( fct, 500 );

    console.log ("hier bin ich");
    */


}

var p = Controller.prototype;


p.sayHello = function ()
{
    console.log ("say Hello " + this.val );
}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'Controller', Controller )
    ;
