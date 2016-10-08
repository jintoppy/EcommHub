/* eslint-env browser */
(function() {
  'use strict';

  class SearchController {

    constructor(SearchService) {
      this.SearchService = SearchService;
    }

    onSearch(filterObj) {
      this.searchTriggered = true;
      this.priceFilter = null;
      let promise = this.SearchService.getResult(filterObj);
      promise.then(result => {
        this.searchResult = result;
        this.originalResult = result;
        this.searchTriggered = false;
        this.priceFilter = this.SearchService.getPriceRanges(this.searchResult);
      });
    }

    onPriceFilter(filterVal){
      let newResult = this.SearchService.filterResultsBasedOnPrice(this.originalResult, filterVal);
      this.searchResult = newResult;
    }

  }

  SearchController.$inject = ['SearchService'];
  angular.module('myflight.search')
    .controller('SearchController', SearchController);
})();
