var app=angular.module('myApp',[]);

app.directive("myDirective",function(){
	return{
		restrict:"A",
		link:function(){
			alert("Hey!! I am working.");
		}
	};
});