/**
 * Created by Nan on 2017/10/13.
 */
var app=angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $stateProvider
        .state("shopping",{
            url:"/shopping",
            templateUrl:"./App/View/shopping.html"
        });
    $urlRouterProvider.otherwise("/shopping")
});