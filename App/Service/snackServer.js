/**
 * Created by yuguo on 2017/10/18.
 */
app.factory("snackServer",["baseServer",function(baseServer){
    return {
        snack:function(type,url){
            return baseServer.ajax(type,url);
        }
    }
}]);
