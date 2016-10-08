/* eslint-env browser */
(function() {
  'use strict';

  class ProductListController {

    constructor() {
      this.products = [{
        imageURL:'https://cdn07.nnnow.com/web-images/medium/styles/V6OA5JYFVLI/1472823323568/1.jpg',
        title: 'Product 1',
        price: '22'
      },
      {
        imageURL:'https://cdn15.nnnow.com/web-images/medium/styles/7NVARB80S1N/1473157768666/1.jpg',
        title: 'Product 2',
        price: '100'
      }];
    }

  }

  angular.module('ecomm.catalog')
    .component('productList', {
      templateUrl: 'scripts/app/catalog/product-list.tpl.html',
      controller: ProductListController,
      replace: true,
      bindings: {
        resuts: '='
      }
    });
})();
