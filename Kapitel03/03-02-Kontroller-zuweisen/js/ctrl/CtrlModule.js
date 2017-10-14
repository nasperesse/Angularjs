function Controller ()
{
    console.log ("controller für View wurde erstellt");
}

var p = Controller.prototype;

p.onClick = function ()
{

}

var ctrl = angular.module('app.ctrl', [])
        .controller ( 'Controller', Controller )
    ;
