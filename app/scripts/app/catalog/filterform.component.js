/* eslint-env browser */
(function() {
  'use strict';

  class FilterFormController {

    constructor() {
    }

  }

  angular.module('ecomm.catalog')
    .component('filterForm', {
      templateUrl: 'scripts/app/search/filter-form.tpl.html',
      controller: FilterFormController,
      replace: true,
      bindings: {
      }
    });
})();
