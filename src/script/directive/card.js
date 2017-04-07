'use strict';
//一个  指令：（自定义指令）
angular.module('app').directive('appCard',['$http',function($http){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/card.html',
		scope:{
			data: '=',
			filterObj: '=',
			isFavorite: '='
		},
		link:function($scope){
				
				$scope.select = function(item){
					$http.post('data/myFavorite.json',{
						id: item.id,
						select: !item.select
					}).then(function(resp){
						item.select = ! item.select;
					});
				};
			}
	};
}]);