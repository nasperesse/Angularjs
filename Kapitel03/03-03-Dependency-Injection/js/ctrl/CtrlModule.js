function Controller ( $log , Model )
{
    $log.log ("controller für View wurde erstellt");
    $log.warn ( Model.getValue() );
}

var p = Controller.prototype;

p.onClick = function ()
{

}

var ctrl = angular.module('app.ctrl', ['app.model'])
        .controller ( 'Controller', Controller )
    ;
