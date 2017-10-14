var Model = function ( $log, counter, version )
{
    return {
        getSampleData : function () {
            return "Hallo Daten-Model";
        }
        , getValue : function ()
        {
            return counter;
        }
        , setValue : function ( val )
        {
            counter = val;
        }
        , getVersion : function ()
        {
            return version;
        }
    }
}

var model = angular.module('app.model', [])
        .value("counter", 3)
        .constant("version", "v.1.0.1")
        .factory ( "Model", Model );
    ;
