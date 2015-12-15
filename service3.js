var app=angular.module('myApp',[]);
app.service('myService',function(){
	var product={
		name:'',
		price:''
	};
	return product;
});

app.controller('myCtrl1',['$scope','myService',function($scope,myService){
	
	$scope.product=myService;

	
}]);

app.controller('myCtrl2',['$scope','myService',function($scope,myService){
	
	$scope.product=myService;
	
}]);