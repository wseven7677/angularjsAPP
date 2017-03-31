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
	}).state('company',{
		url:'/company/:id',
		templateUrl:'view/company.html',
		controller:'companyCtrl'
	}).state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl'
	});
	$urlRouterProvider.otherwise('main');
}])