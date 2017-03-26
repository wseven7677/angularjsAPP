'use strict';
//一个  指令：（自定义指令）
angular.module('app').directive('appCard',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/card.html'
	};
}]);