function Controller ( $scope, $log , Model )
{
    $scope.sayHello = "hello world!";
    $scope.sayHelloHTML = "<strong>Hello World</strong>";

    $log.log ( $scope );
    /*
    $scope.click = function () {
        //$log.log ("clicked");
        Model.setValue( Model.getValue() + 1 );
        //$scope.sayHello = "Button wurde geklickt # " + Model.getValue();
    }
    */

    this.model = Model;

    var that = this;
    $scope.click = function ()
    {
        that.onClick();
    }

    $scope.getHelloExp = function ()
    {
        return $scope.sayHello + " # " + Model.getValue();
    }

}

var p = Controller.prototype;

p.onClick = function ()
{
    this.model.setValue( this.model.getValue() + 1 );
}


var ctrl = angular.module('app.ctrl', ['app.model'])
        .controller ( 'Controller', Controller )
    ;
