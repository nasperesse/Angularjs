function EuroFilterFactory ()
{
    return function ( num, decimals, preceding )
    {

        if ( angular.isNumber ( decimals ) )
        {
            num = Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
        }


        if ( preceding === true )
            num = "€ " + num;
        else
            num += " €";

        num = num.replace( /\./, "," );

        return num;

    }
}

var filter = angular.module('app.filter', [])
        .filter ( "euro", EuroFilterFactory)
    ;
