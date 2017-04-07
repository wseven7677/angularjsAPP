'use strict';
//一个 控制器：
angular.module('app').controller('registerCtrl',['$interval','$http','$state','$scope',function($interval,$http,$state,$scope){
	$scope.submit = function(){
		$http.post('data/regist.json',$scope.user).then(function(resp){
			// console.log(resp.data);
			$state.go('login');
		});
	};
	var count = 60;
	$scope.send = function(){
		$http.get('data/code.json').then(function(response){
			if(1 === response.data.state){
				count = 60;
				$scope.time = '60s';
				var interval = $interval(function(){
					if(count <= 0){
						$interval.cancel(interval);
						$scope.time = '';
						return;
					}else{
						count--;
						$scope.time = count + 's';
					}
				},1000);
			}
		});
	};
}]);