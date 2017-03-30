'use strict';
//一个 控制器：
angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
	$http.get('/data/company.json?id='+$state.params.id).then(function(response){
		$scope.company = response.data;
	});
}]);