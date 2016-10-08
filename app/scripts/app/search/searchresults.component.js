/* eslint-env browser */
(function() {
  'use strict';

  class SearchResultsController {

    constructor() {
      this.$onInit = function() {
      };
    }

  }

  angular.module('myflight.search')
    .component('searchResults', {
      templateUrl: 'scripts/app/search/search-results.tpl.html',
      controller: SearchResultsController,
      replace: true,
      bindings: {
        resuts: '='
      }
    });
})();
