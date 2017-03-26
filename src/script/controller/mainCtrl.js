'use strict';
//一个 控制器：
angular.module('app').controller('mainCtrl',['$scope',function($scope){
	$scope.list = [{
		id: '1',
		name: '记录',
		abstract: '你的抽卡记录',
		imgSrc: 'image/2233.png',

	},{
		id: '2',
		name: '卡面',
		abstract: '你当前拥有的句子',
		imgSrc: 'image/2233.png',
	},{
		id: '3',
		name: 'x3商店',
		abstract: '三倍价格换取所需句子',
		imgSrc: 'image/2233.png',
	}];
}]);