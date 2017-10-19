/**
 * Created by yuguo on 2017/10/18.
 */
app.controller("snackController",["$scope","snackServer",function($scope,snackServer){
    var url="http://localhost:8866/?shopping";
    snackServer.snack("get",url).then(function (result) {
        $scope.datas=result;
    })
}]);