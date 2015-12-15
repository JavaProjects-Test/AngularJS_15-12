var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.message="Hello";
});

app.directive("myDir",function(){
	return function(scope,element,attrs){
		element.text(scope.message+" "+attrs.messagesss);
	};
	
});