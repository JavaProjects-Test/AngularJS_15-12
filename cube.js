var app=angular.module('myApp',[]);
app.service('mathService',function(){
	
	this.multiply=function(a,b){
		return a*b;
	};
	
});

app.service('cubeNumber',function(mathService){
	
	this.cube=function(a){
		return mathService.multiply(a,mathService.multiply(a,a));
	};
	
});

app.controller('myCtrl',function($scope,cubeNumber){
	$scope.cube=function(){
		$scope.answer=cubeNumber.cube($scope.number);
	};
});