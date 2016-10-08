/* eslint-env browser */
/* global angular */
(function() {
  'use strict';
  angular.module('myflight')
  	.constant('AppConstant',{
  		API: {
  			GET_FLIGHTS: 'https://api.myjson.com/bins/3aezg'
  		}
  	})
})();
