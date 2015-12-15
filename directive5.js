var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.message="Look at Pop-Up";
});


app.directive("firstDirective",function(){
	return function(scope,element){
		element.text(scope.message);
	};
});

app.directive("secondDirective",function(){
	return {
		restrict:"A",
		link:function(){
		alert("Hey!! its Pop-Up");	
		}
	};
	
});