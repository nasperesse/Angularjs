var Model = function ( $log, headline, myConst )
{
    return {
        getSampleData : function () {
            return "Hallo Daten-Model";
        }
        , getValue : function ()
        {
            return headline;
        }
        , setValue : function ( val )
        {
            headline = val;
        }
        , getConst : function ()
        {
            return myConst;
        }
    }
}

var model = angular.module('app.model', [])
        .value("headline", "angularJS...")
        .constant("myConst", "KONSTATE")
        .factory ( "Model", Model );
    ;
