'use strict';

angular.module('app').directive('appPositionClass',[function(){
	return{
		restrict:'A',
		replace:true,
		scope:{
			com:'='
		},
		templateUrl:'view/template/positionClass.html',
		link:function($scope){
			$scope.showPositionList = function(idx){
				$scope.positionList = $scope.com.positionClass[idx].positionList;
				$scope.isActive = idx;
			}
			//要注意事件发生时，所需的东西是否加载好了，如果错过了那就办不了了。
			$scope.$watch('com',function(newVal){
				if(newVal)$scope.showPositionList(0);
			});
		}
	};
}]);