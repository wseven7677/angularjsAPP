'use strict';
angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http){
	$http.get('data/city.json').then(function(response){
		dict.city = response.data;
	});
	$http.get('data/salary.json').then(function(response){
		dict.salary = response.data;
	});
	$http.get('data/scale.json').then(function(response){
		dict.scale = response.data;
	});
}]);