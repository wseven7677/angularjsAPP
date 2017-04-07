'use strict';
//一个 控制器：
angular.module('app').controller('contentCtrl',['cache','$q','$http','$state','$scope',function(cache,$q,$http,$state,$scope){
	$scope.isLogin = !!cache.get('name');
	function getPosition(){
		var def = $q.defer();
		$http.get('/data/position.json?id='+$state.params.id).then(function(response){
			$scope.position = response.data;
			def.resolve(response);
		},function(err){
			def.reject(err);
		});
		return def.promise;
	}
	function getCompany(id){
		$http.get('/data/company.json?id='+id).then(function(response){
			$scope.company = response.data;
		});
	}
	getPosition().then(function(obj){
		getCompany(obj.data.companyId);
	});
}]);