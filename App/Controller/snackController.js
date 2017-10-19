/**
 * Created by yuguo on 2017/10/18.
 */
app.controller("snackController", ["$scope", "snackServer", function ($scope, snackServer) {
    var url = "http://localhost:8866/?shopping";
    snackServer.snack("get", url).then(function (result) {
        $scope.datas = result;
        pir()
    });
    $scope.flag = false;
    $scope.$on("deleteItem", function (event, index) {
        $scope.datas.splice(index, 1)
        pir()
    });
    $scope.$on("itemChecked", function (event, index) {
        $scope.datas[index].state = !$scope.datas[index].state;
        var cont=0;
        for (var i = 0; i < $scope.datas.length; i++) {
            if($scope.datas[i].state){
                cont++
            }
        }
        if(cont==$scope.datas.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        pir()
    });
    $scope.itemCheckedAll = function () {
        $scope.flag = !$scope.flag;
        for (var i = 0; i < $scope.datas.length; i++) {
            $scope.datas[i].state=$scope.flag
        }
        pir()
    };
    $scope.$on("itemCount", function (event, index) {
        pir()
    });
    function pir(){
        $scope.pr=0;
        $scope.datas.forEach(function(i,v){
            if(i.state){
                $scope.pr+=i.num*i.price
            }
        })
    }
}]);