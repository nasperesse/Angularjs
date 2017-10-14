function Controller ()
{
}

var p = Controller.prototype;

p.onClick = function ()
{

}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'Controller', Controller )
    ;
