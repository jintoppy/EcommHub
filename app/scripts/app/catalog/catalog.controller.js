/* eslint-env browser */
(function() {
  'use strict';

  class CatalogController {

    constructor(CatalogService) {
      this.CatalogService = CatalogService;
    }

  }

  CatalogController.$inject = ['CatalogService'];
  angular.module('ecomm.catalog')
    .controller('CatalogController', CatalogController);
})();
