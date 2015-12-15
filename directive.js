var app=angular.module('myApp',[]);

app.directive("superman",function(){
	return{
		restrict:"E",
		template:"<div>Hey!! its message from Directive Template!!</div>"
	};
	
});