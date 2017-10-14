function SuperCtrl ()
{

}

var p = SuperCtrl.prototype;
p.scope = undefined;
p.log = undefined;
p.element = undefined;

p.init = function ( name, scope, log, element )
{

    var that = this;

    this.name = name;
    this.scope = scope;
    this.logger = log;
    this.element = element;

    this.registerListener ();

    that.scope.sendHelloWorldUpwards = function ()
    {
        that.logger.log ("sending message up from " + that.name );
        that.scope.$emit( "up", "hello world! from ["+that.name+"] to me and his parents" )
    }

    that.scope.sendHelloWorldDownwards = function ()
    {
        that.logger.log ("sending message down from " + that.name );
        that.scope.$broadcast( "down", "hello world! from ["+that.name+"] to me and his childs" )
    }


}

var p = SuperCtrl.prototype;

p.registerListener = function ()
{
    var that = this;

    var removeOnUpListener = that.scope.$on ( "up", function ( event, val ) {
        val = val.replace( /me/, "["+that.name+"]")
        that.logger.log ( "receive up message in " + that.name + " -> ["+val+"]");
        that.logger.log ( event );

        if ( event.currentScope !== event.targetScope )
        {
            event.stopPropagation();
            removeOnUpListener ();
        }

    })  ;

    that.scope.$on ( "down", function ( event, val ) {
        val = val.replace( /me/, "["+that.name+"]")
        that.logger.log ( "receive down message in " + that.name + " -> ["+val+"]");
    })  ;
};

function ContainerCtrl ( $scope, $log, $element  )
{
    this.init( "ContainerCtrlScope", $scope, $log, $element );
}
p = ContainerCtrl.prototype = new SuperCtrl();

function LeftCtrl ($scope, $log, $element  )
{
    this.init( "LeftCtrlScope", $scope, $log, $element );
}
p = LeftCtrl.prototype = new SuperCtrl();

function RightCtrl ( $scope, $log, $element  )
{
    this.init( "RightCtrlScope", $scope, $log, $element );
}
p = RightCtrl.prototype = new SuperCtrl();

function ChildCtrl ( $scope, $log, $element  )
{
    this.init( "ChildCtrlScope", $scope, $log, $element );
}
p = ChildCtrl.prototype = new SuperCtrl();



var ctrl = angular.module('app.ctrl', [])
        .controller ( 'ContainerCtrl', ContainerCtrl )
        .controller ( 'LeftCtrl', LeftCtrl )
        .controller ( 'RightCtrl', RightCtrl )
        .controller ( 'ChildCtrl', ChildCtrl )
    ;
