function Controller ( $scope, $log , Model )
{
    this.model = Model;

    $scope.sayHello = "hello world!";
    $scope.label = "klick mich";

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

function ButtonController ( $scope, $log , Model )
{
    $scope.label = "klick mich ....";
    $log.log ( $scope );

    this.scope = $scope;
    var that = this;
    $scope.click = function ()
    {
        that.onClick();
    }

}
var p = ButtonController.prototype;

p.onClick = function ()
{
    //console.log ("ButtonCtrl.Click");
    this.scope.$parent.click ();
}

var ctrl = angular.module('app.ctrl', ['app.model'])
        .controller ( 'Controller', Controller )
        .controller ( 'ButtonController', ButtonController )
    ;
