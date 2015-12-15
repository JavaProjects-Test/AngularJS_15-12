var app=angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
	$scope.message="sahil";

});

app.directive("firstDirective",function(){
	return function(scope,element){
		console.log(scope.message);
		element.text(scope.message);
	};	
	
});