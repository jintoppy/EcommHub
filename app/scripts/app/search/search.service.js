/* eslint-env browser */
(function() {
  'use strict';

  class SearchService {

    constructor($http, $q, AppConstant) {
      this.$http = $http;
      this.$q = $q;
      this.AppConstant = AppConstant;
    }
    getPriceRanges(results){
      var prices = results.map(x=>x.total);
      return {
        min: Math.min(...prices),
        max: Math.max(...prices)
      };
    }
    filterResultsBasedOnPrice(results, price){
      price = parseInt(price,10);
      return results.filter(item=> item.total<=price);
    }
    getCombinedFilterResults(results, filter){
        let onewayFilters = this.filterResults(results, filter.oneway);
        let returnFilters = this.filterResults(results, filter.return);
        let result = onewayFilters.reduce((acc, curr) => {
          if(returnFilters.length===0){
            acc.push({
              oneway: curr,
              return: false,
              total: curr.price
            });
          }
          returnFilters.forEach(item =>  {
            let obj = {
              oneway: curr,
              return: item,
              total: curr.price + item.price
            };
            acc.push(obj)
          });
          return acc;
        },[]);
        return result;
    }
    filterResults(results, filter) {
      return results.filter(item => {
        filter.passengerCnt = filter.passengerCnt || 1;
        return item.availableSeats > filter.passengerCnt &&
                item.origin === filter.origin &&
                item.destination === filter.destination &&
                new Date(item.departure.split('T')[0]).toDateString() ===
                          filter.depDate.toDateString();
      });
    }

    getResult(filter) {
      let defer = this.$q.defer();
      let promise = this.$http.get(this.AppConstant.API.GET_FLIGHTS);
      promise.then(response => {
        defer.resolve(this.getCombinedFilterResults(response.data, filter));
      });
      return defer.promise;
    }

  }

  SearchService.$inject = ['$http', '$q', 'AppConstant'];
  angular.module('myflight.search')
    .service('SearchService', SearchService);
})();
