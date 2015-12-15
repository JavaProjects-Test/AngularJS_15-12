var app=angular.module('myApp',[]);
app.service('myService',function(){
	
	this.multiply=function(a,b){
		return a*b;
	};
	
});

app.service('squareNumber',function(myService){
	
	this.square=function(a){
		return myService.multiply(a,a);
	};
	
});

app.controller('myCtrl',function($scope,squareNumber){
	
	$scope.square=function(){
		$scope.answer=squareNumber.square($scope.number);
	};
	
});