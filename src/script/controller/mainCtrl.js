'use strict';
//一个 控制器：
angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
	$http.get('/data/positionList.json').then(function(response){
		$scope.list = response.data;
	});
	
}]);