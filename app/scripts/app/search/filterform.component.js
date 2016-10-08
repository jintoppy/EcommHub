/* eslint-env browser */
(function() {
  'use strict';

  class FilterFormController {

    constructor() {
      this.filter = {
        oneway: {},
        return: {}
      };
      this.passengerList = [1, 2, 3, 4, 5];
      this.uiState = {
        onewayVisible: true
      };
    }
    setUIState(modifier){
      this.uiState = Object.assign(this.uiState, modifier);
    }
    setActiveView(view){
      this.setUIState({
        onewayVisible: view==='one'? true: false 
      });
    }
    onFilterFormSubmit(e, form) {
      e.preventDefault();
      if (form.$valid) {
        this.onSearch({
          filterObj: this.filter
        });
      }
    }

  }

  angular.module('myflight.search')
    .component('filterForm', {
      templateUrl: 'scripts/app/search/filter-form.tpl.html',
      controller: FilterFormController,
      replace: true,
      bindings: {
        onSearch: '&',
        priceFilter: '<',
        onPriceFilter: '&' 
      }
    });
})();
