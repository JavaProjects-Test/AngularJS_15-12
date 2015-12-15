var app=angular.module('myApp',[]);
app.controller('myCtrl1', ['$rootScope', '$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
       $scope.myservice = myservice;   
    }]);
	
app.controller('myCtrl2', ['$rootScope', '$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
      $scope.myservice = myservice;
    }]);
	
app.service('myservice',function(){
	this.x="yyyyyy";
	
});