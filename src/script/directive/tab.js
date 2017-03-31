'use strict';

angular.module('app').directive('appTab',[function(){
	return{
		restrict:'A',
		replace:true,
		scope: {
			list: '=',
			tabClick: '&'//通知父控制器
		},
		templateUrl:'view/template/tab.html',
		link: function($scope){
			$scope.click = function(tab){
				$scope.selectId = tab.id;
				$scope.tabClick(tab);//通知父控制器
			};
		}
	};
}]);