var app=angular.module('myApp',[]);
app.service('mathService',function(){
	this.add=function(a,b){
		return a+b;
	};
	
	this.subtract=function(a,b){
		return a-b;
	};
	
	this.multiply=function(a,b){
		return a*b;
	};
	
	this.divide=function(a,b){
		return a/b;
	};
});

app.controller('myCtrl',function($scope,mathService){
	
	$scope.add=function(){
		$scope.result=mathService.add($scope.number1,$scope.number2);
	};
	
	$scope.subtract=function(){
		$scope.result=mathService.subtract($scope.number1,$scope.number2);
	};
	
	$scope.multiply=function(){
		$scope.result=mathService.multiply($scope.number1,$scope.number2);
	};
	
	$scope.divide=function(){
		$scope.result=mathService.divide($scope.number1,$scope.number2);
	};
	
});