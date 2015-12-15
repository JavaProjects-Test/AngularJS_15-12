var app=angular.module('myApp',[]);
app.controller('myCtrl1',['$scope','myService',function($scope,myService){
	$scope.text="hey";
$scope.send=function()
{
	myService.sendData($scope.text);
};
    
}]);
app.controller('myCtrl2',['$scope','myService',function($scope,myService){
	$scope.text="";
	$scope.$on("data_shared",function(){
		var text=myService.getData();
		$scope.text=text;
	});
}]);
app.factory('myService',function($rootScope){
	var service = {};
  
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
  };
  service.getData = function(){
    return this.data;
  };
  return service;	
});