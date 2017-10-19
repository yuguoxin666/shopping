/**
 * Created by yuguo on 2017/10/18.
 */
app.directive("shoppingSnacks",function(){
   return {
       restrict: "EA",
       scope:{
           item:"=item",
           index:"@index"
       },
       templateUrl:"App/View/temp/shoppingsnacks.html",
       controller:"snacksController"
   }
});