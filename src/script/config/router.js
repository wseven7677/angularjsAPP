'use strict';
//路由配置：
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{			//某个状态
		url:'/main',						//给他起的url名字
		templateUrl:'view/main.html',		//对应的网页模版的位置
		controller:'mainCtrl'				//控制器是谁
	}).state('content',{
		url: '/content/:id',
		templateUrl: 'view/content.html',
		controller: 'contentCtrl'
	});
	$urlRouterProvider.otherwise('main');
}])