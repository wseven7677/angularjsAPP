'use strict';

angular.module('app').directive('appPositionInfo',['$http',function($http){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionInfo.html',
		scope: {
			isActive: '=',
			isLogin: '=',
			pos: '='
		},
		link: function($scope){
			$scope.$watch('pos',function(newVal){
				if(newVal){
					$scope.pos.select = $scope.pos.select || false;
					$scope.heartClass = $scope.pos.select?'glyphicon-heart':'glyphicon-heart-empty';
				}
			});
			$scope.favorite = function(){
				$http.post('data/myFavorite.json',{
					id: $scope.pos.id,
					select: $scope.pos.select
				}).then(function(resp){
					$scope.pos.select = ! $scope.pos.select;
					$scope.heartClass = $scope.pos.select?'glyphicon-heart':'glyphicon-heart-empty';
				});
			};
		}
	};
}]);