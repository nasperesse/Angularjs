/**
 * Created by Angel on 10.10.17.
 */


var intervalID;

intervalID = setInterval(function () {
    if(/loaded|complete/i.test(document.readyState)){
        console.log("doc ready");
        angular.bootstrap(document, ['app']);
        clearInterval(intervalID);
    }

},10);