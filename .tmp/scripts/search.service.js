'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  SearchService = function () {

    function SearchService($http, $q, AppConstant) {_classCallCheck(this, SearchService);
      this.$http = $http;
      this.$q = $q;
      this.AppConstant = AppConstant;
    }_createClass(SearchService, [{ key: 'getPriceRanges', value: function getPriceRanges(
      results) {
        var prices = results.map(function (x) {return x.total;});
        return {
          min: Math.min.apply(Math, _toConsumableArray(prices)),
          max: Math.max.apply(Math, _toConsumableArray(prices)) };

      } }, { key: 'filterResultsBasedOnPrice', value: function filterResultsBasedOnPrice(
      results, price) {
        price = parseInt(price, 10);
        return results.filter(function (item) {return item.total <= price;});
      } }, { key: 'getCombinedFilterResults', value: function getCombinedFilterResults(
      results, filter) {
        var onewayFilters = this.filterResults(results, filter.oneway);
        var returnFilters = this.filterResults(results, filter.return);
        var result = onewayFilters.reduce(function (acc, curr) {
          if (returnFilters.length === 0) {
            acc.push({
              oneway: curr,
              return: false,
              total: curr.price });

          }
          returnFilters.forEach(function (item) {
            var obj = {
              oneway: curr,
              return: item,
              total: curr.price + item.price };

            acc.push(obj);
          });
          return acc;
        }, []);
        return result;
      } }, { key: 'filterResults', value: function filterResults(
      results, filter) {
        return results.filter(function (item) {
          filter.passengerCnt = filter.passengerCnt || 1;
          return item.availableSeats > filter.passengerCnt &&
          item.origin === filter.origin &&
          item.destination === filter.destination &&
          new Date(item.departure.split('T')[0]).toDateString() ===
          filter.depDate.toDateString();
        });
      } }, { key: 'getResult', value: function getResult(

      filter) {var _this = this;
        var defer = this.$q.defer();
        var promise = this.$http.get(this.AppConstant.API.GET_FLIGHTS);
        promise.then(function (response) {
          defer.resolve(_this.getCombinedFilterResults(response.data, filter));
        });
        return defer.promise;
      } }]);return SearchService;}();



  SearchService.$inject = ['$http', '$q', 'AppConstant'];
  angular.module('myflight.search').
  service('SearchService', SearchService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlNlYXJjaFNlcnZpY2UiLCIkaHR0cCIsIiRxIiwiQXBwQ29uc3RhbnQiLCJyZXN1bHRzIiwicHJpY2VzIiwibWFwIiwieCIsInRvdGFsIiwibWluIiwiTWF0aCIsIm1heCIsInByaWNlIiwicGFyc2VJbnQiLCJmaWx0ZXIiLCJpdGVtIiwib25ld2F5RmlsdGVycyIsImZpbHRlclJlc3VsdHMiLCJvbmV3YXkiLCJyZXR1cm5GaWx0ZXJzIiwicmV0dXJuIiwicmVzdWx0IiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImxlbmd0aCIsInB1c2giLCJmb3JFYWNoIiwib2JqIiwicGFzc2VuZ2VyQ250IiwiYXZhaWxhYmxlU2VhdHMiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsIkRhdGUiLCJkZXBhcnR1cmUiLCJzcGxpdCIsInRvRGF0ZVN0cmluZyIsImRlcERhdGUiLCJkZWZlciIsInByb21pc2UiLCJnZXQiLCJBUEkiLCJHRVRfRkxJR0hUUyIsInRoZW4iLCJyZXNvbHZlIiwiZ2V0Q29tYmluZWRGaWx0ZXJSZXN1bHRzIiwicmVzcG9uc2UiLCJkYXRhIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiazRCQUFBO0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsZUFEVTs7QUFHSkEsZUFISTs7QUFLUiwyQkFBWUMsS0FBWixFQUFtQkMsRUFBbkIsRUFBdUJDLFdBQXZCLEVBQW9DO0FBQ2xDLFdBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0QsS0FUTztBQVVPQyxhQVZQLEVBVWU7QUFDckIsWUFBSUMsU0FBU0QsUUFBUUUsR0FBUixDQUFZLHFCQUFHQyxFQUFFQyxLQUFMLEVBQVosQ0FBYjtBQUNBLGVBQU87QUFDTEMsZUFBS0MsS0FBS0QsR0FBTCxnQ0FBWUosTUFBWixFQURBO0FBRUxNLGVBQUtELEtBQUtDLEdBQUwsZ0NBQVlOLE1BQVosRUFGQSxFQUFQOztBQUlELE9BaEJPO0FBaUJrQkQsYUFqQmxCLEVBaUIyQlEsS0FqQjNCLEVBaUJpQztBQUN2Q0EsZ0JBQVFDLFNBQVNELEtBQVQsRUFBZSxFQUFmLENBQVI7QUFDQSxlQUFPUixRQUFRVSxNQUFSLENBQWUsd0JBQU9DLEtBQUtQLEtBQUwsSUFBWUksS0FBbkIsRUFBZixDQUFQO0FBQ0QsT0FwQk87QUFxQmlCUixhQXJCakIsRUFxQjBCVSxNQXJCMUIsRUFxQmlDO0FBQ3JDLFlBQUlFLGdCQUFnQixLQUFLQyxhQUFMLENBQW1CYixPQUFuQixFQUE0QlUsT0FBT0ksTUFBbkMsQ0FBcEI7QUFDQSxZQUFJQyxnQkFBZ0IsS0FBS0YsYUFBTCxDQUFtQmIsT0FBbkIsRUFBNEJVLE9BQU9NLE1BQW5DLENBQXBCO0FBQ0EsWUFBSUMsU0FBU0wsY0FBY00sTUFBZCxDQUFxQixVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUMvQyxjQUFHTCxjQUFjTSxNQUFkLEtBQXVCLENBQTFCLEVBQTRCO0FBQzFCRixnQkFBSUcsSUFBSixDQUFTO0FBQ1BSLHNCQUFRTSxJQUREO0FBRVBKLHNCQUFRLEtBRkQ7QUFHUFoscUJBQU9nQixLQUFLWixLQUhMLEVBQVQ7O0FBS0Q7QUFDRE8sd0JBQWNRLE9BQWQsQ0FBc0IsZ0JBQVM7QUFDN0IsZ0JBQUlDLE1BQU07QUFDUlYsc0JBQVFNLElBREE7QUFFUkosc0JBQVFMLElBRkE7QUFHUlAscUJBQU9nQixLQUFLWixLQUFMLEdBQWFHLEtBQUtILEtBSGpCLEVBQVY7O0FBS0FXLGdCQUFJRyxJQUFKLENBQVNFLEdBQVQ7QUFDRCxXQVBEO0FBUUEsaUJBQU9MLEdBQVA7QUFDRCxTQWpCWSxFQWlCWCxFQWpCVyxDQUFiO0FBa0JBLGVBQU9GLE1BQVA7QUFDSCxPQTNDTztBQTRDTWpCLGFBNUNOLEVBNENlVSxNQTVDZixFQTRDdUI7QUFDN0IsZUFBT1YsUUFBUVUsTUFBUixDQUFlLGdCQUFRO0FBQzVCQSxpQkFBT2UsWUFBUCxHQUFzQmYsT0FBT2UsWUFBUCxJQUF1QixDQUE3QztBQUNBLGlCQUFPZCxLQUFLZSxjQUFMLEdBQXNCaEIsT0FBT2UsWUFBN0I7QUFDQ2QsZUFBS2dCLE1BQUwsS0FBZ0JqQixPQUFPaUIsTUFEeEI7QUFFQ2hCLGVBQUtpQixXQUFMLEtBQXFCbEIsT0FBT2tCLFdBRjdCO0FBR0MsY0FBSUMsSUFBSixDQUFTbEIsS0FBS21CLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixDQUFULEVBQXVDQyxZQUF2QztBQUNVdEIsaUJBQU91QixPQUFQLENBQWVELFlBQWYsRUFKbEI7QUFLRCxTQVBNLENBQVA7QUFRRCxPQXJETzs7QUF1REV0QixZQXZERixFQXVEVTtBQUNoQixZQUFJd0IsUUFBUSxLQUFLcEMsRUFBTCxDQUFRb0MsS0FBUixFQUFaO0FBQ0EsWUFBSUMsVUFBVSxLQUFLdEMsS0FBTCxDQUFXdUMsR0FBWCxDQUFlLEtBQUtyQyxXQUFMLENBQWlCc0MsR0FBakIsQ0FBcUJDLFdBQXBDLENBQWQ7QUFDQUgsZ0JBQVFJLElBQVIsQ0FBYSxvQkFBWTtBQUN2QkwsZ0JBQU1NLE9BQU4sQ0FBYyxNQUFLQyx3QkFBTCxDQUE4QkMsU0FBU0MsSUFBdkMsRUFBNkNqQyxNQUE3QyxDQUFkO0FBQ0QsU0FGRDtBQUdBLGVBQU93QixNQUFNQyxPQUFiO0FBQ0QsT0E5RE87Ozs7QUFrRVZ2QyxnQkFBY2dELE9BQWQsR0FBd0IsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixhQUFoQixDQUF4QjtBQUNBQyxVQUFRQyxNQUFSLENBQWUsaUJBQWY7QUFDR0MsU0FESCxDQUNXLGVBRFgsRUFDNEJuRCxhQUQ1QjtBQUVELENBckVEIiwiZmlsZSI6InNlYXJjaC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgQXBwQ29uc3RhbnQpIHtcbiAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICAgIHRoaXMuQXBwQ29uc3RhbnQgPSBBcHBDb25zdGFudDtcbiAgICB9XG4gICAgZ2V0UHJpY2VSYW5nZXMocmVzdWx0cyl7XG4gICAgICB2YXIgcHJpY2VzID0gcmVzdWx0cy5tYXAoeD0+eC50b3RhbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW46IE1hdGgubWluKC4uLnByaWNlcyksXG4gICAgICAgIG1heDogTWF0aC5tYXgoLi4ucHJpY2VzKVxuICAgICAgfTtcbiAgICB9XG4gICAgZmlsdGVyUmVzdWx0c0Jhc2VkT25QcmljZShyZXN1bHRzLCBwcmljZSl7XG4gICAgICBwcmljZSA9IHBhcnNlSW50KHByaWNlLDEwKTtcbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcihpdGVtPT4gaXRlbS50b3RhbDw9cHJpY2UpO1xuICAgIH1cbiAgICBnZXRDb21iaW5lZEZpbHRlclJlc3VsdHMocmVzdWx0cywgZmlsdGVyKXtcbiAgICAgICAgbGV0IG9uZXdheUZpbHRlcnMgPSB0aGlzLmZpbHRlclJlc3VsdHMocmVzdWx0cywgZmlsdGVyLm9uZXdheSk7XG4gICAgICAgIGxldCByZXR1cm5GaWx0ZXJzID0gdGhpcy5maWx0ZXJSZXN1bHRzKHJlc3VsdHMsIGZpbHRlci5yZXR1cm4pO1xuICAgICAgICBsZXQgcmVzdWx0ID0gb25ld2F5RmlsdGVycy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICAgIGlmKHJldHVybkZpbHRlcnMubGVuZ3RoPT09MCl7XG4gICAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICAgIG9uZXdheTogY3VycixcbiAgICAgICAgICAgICAgcmV0dXJuOiBmYWxzZSxcbiAgICAgICAgICAgICAgdG90YWw6IGN1cnIucHJpY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5GaWx0ZXJzLmZvckVhY2goaXRlbSA9PiAge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgb25ld2F5OiBjdXJyLFxuICAgICAgICAgICAgICByZXR1cm46IGl0ZW0sXG4gICAgICAgICAgICAgIHRvdGFsOiBjdXJyLnByaWNlICsgaXRlbS5wcmljZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFjYy5wdXNoKG9iailcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LFtdKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZmlsdGVyUmVzdWx0cyhyZXN1bHRzLCBmaWx0ZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgZmlsdGVyLnBhc3NlbmdlckNudCA9IGZpbHRlci5wYXNzZW5nZXJDbnQgfHwgMTtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYXZhaWxhYmxlU2VhdHMgPiBmaWx0ZXIucGFzc2VuZ2VyQ250ICYmXG4gICAgICAgICAgICAgICAgaXRlbS5vcmlnaW4gPT09IGZpbHRlci5vcmlnaW4gJiZcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3RpbmF0aW9uID09PSBmaWx0ZXIuZGVzdGluYXRpb24gJiZcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmRlcGFydHVyZS5zcGxpdCgnVCcpWzBdKS50b0RhdGVTdHJpbmcoKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmRlcERhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSZXN1bHQoZmlsdGVyKSB7XG4gICAgICBsZXQgZGVmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGh0dHAuZ2V0KHRoaXMuQXBwQ29uc3RhbnQuQVBJLkdFVF9GTElHSFRTKTtcbiAgICAgIHByb21pc2UudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGRlZmVyLnJlc29sdmUodGhpcy5nZXRDb21iaW5lZEZpbHRlclJlc3VsdHMocmVzcG9uc2UuZGF0YSwgZmlsdGVyKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgIH1cblxuICB9XG5cbiAgU2VhcmNoU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckcScsICdBcHBDb25zdGFudCddO1xuICBhbmd1bGFyLm1vZHVsZSgnbXlmbGlnaHQuc2VhcmNoJylcbiAgICAuc2VydmljZSgnU2VhcmNoU2VydmljZScsIFNlYXJjaFNlcnZpY2UpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
