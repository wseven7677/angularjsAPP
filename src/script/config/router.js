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
	}).state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl'
	}).state('register',{
		url:'/register',
		templateUrl:'view/register.html',
		controller:'registerCtrl'
	}).state('me',{
		url:'/me',
		templateUrl:'view/me.html',
		controller:'meCtrl'
	}).state('post',{
		url:'/post',
		templateUrl:'view/post.html',
		controller:'postCtrl'
	}).state('favorite',{
		url:'/favorite',
		templateUrl:'view/favorite.html',
		controller:'favoriteCtrl'
	});
	$urlRouterProvider.otherwise('main');
}])