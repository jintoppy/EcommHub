/* eslint-env browser */
(function() {
  'use strict';

  class CatalogService {

    constructor($http, $q, AppConstant) {
      this.$http = $http;
      this.$q = $q;
      this.AppConstant = AppConstant;
    }

  }

  CatalogService.$inject = ['$http', '$q', 'AppConstant'];
  angular.module('ecomm.catalog')
    .service('CatalogService', CatalogService);
})();
