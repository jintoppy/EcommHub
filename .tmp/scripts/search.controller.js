'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  SearchController = function () {

    function SearchController(SearchService) {_classCallCheck(this, SearchController);
      this.SearchService = SearchService;
    }_createClass(SearchController, [{ key: 'onSearch', value: function onSearch(

      filterObj) {var _this = this;
        this.searchTriggered = true;
        this.priceFilter = null;
        var promise = this.SearchService.getResult(filterObj);
        promise.then(function (result) {
          _this.searchResult = result;
          _this.originalResult = result;
          _this.searchTriggered = false;
          _this.priceFilter = _this.SearchService.getPriceRanges(_this.searchResult);
        });
      } }, { key: 'onPriceFilter', value: function onPriceFilter(

      filterVal) {
        var newResult = this.SearchService.filterResultsBasedOnPrice(this.originalResult, filterVal);
        this.searchResult = newResult;
      } }]);return SearchController;}();



  SearchController.$inject = ['SearchService'];
  angular.module('myflight.search').
  controller('SearchController', SearchController);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlNlYXJjaENvbnRyb2xsZXIiLCJTZWFyY2hTZXJ2aWNlIiwiZmlsdGVyT2JqIiwic2VhcmNoVHJpZ2dlcmVkIiwicHJpY2VGaWx0ZXIiLCJwcm9taXNlIiwiZ2V0UmVzdWx0IiwidGhlbiIsInNlYXJjaFJlc3VsdCIsInJlc3VsdCIsIm9yaWdpbmFsUmVzdWx0IiwiZ2V0UHJpY2VSYW5nZXMiLCJmaWx0ZXJWYWwiLCJuZXdSZXN1bHQiLCJmaWx0ZXJSZXN1bHRzQmFzZWRPblByaWNlIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoid3NCQUFBO0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsZUFEVTs7QUFHSkEsa0JBSEk7O0FBS1IsOEJBQVlDLGFBQVosRUFBMkI7QUFDekIsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDRCxLQVBPOztBQVNDQyxlQVRELEVBU1k7QUFDbEIsYUFBS0MsZUFBTCxHQUF1QixJQUF2QjtBQUNBLGFBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxZQUFJQyxVQUFVLEtBQUtKLGFBQUwsQ0FBbUJLLFNBQW5CLENBQTZCSixTQUE3QixDQUFkO0FBQ0FHLGdCQUFRRSxJQUFSLENBQWEsa0JBQVU7QUFDckIsZ0JBQUtDLFlBQUwsR0FBb0JDLE1BQXBCO0FBQ0EsZ0JBQUtDLGNBQUwsR0FBc0JELE1BQXRCO0FBQ0EsZ0JBQUtOLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxnQkFBS0MsV0FBTCxHQUFtQixNQUFLSCxhQUFMLENBQW1CVSxjQUFuQixDQUFrQyxNQUFLSCxZQUF2QyxDQUFuQjtBQUNELFNBTEQ7QUFNRCxPQW5CTzs7QUFxQk1JLGVBckJOLEVBcUJnQjtBQUN0QixZQUFJQyxZQUFZLEtBQUtaLGFBQUwsQ0FBbUJhLHlCQUFuQixDQUE2QyxLQUFLSixjQUFsRCxFQUFrRUUsU0FBbEUsQ0FBaEI7QUFDQSxhQUFLSixZQUFMLEdBQW9CSyxTQUFwQjtBQUNELE9BeEJPOzs7O0FBNEJWYixtQkFBaUJlLE9BQWpCLEdBQTJCLENBQUMsZUFBRCxDQUEzQjtBQUNBQyxVQUFRQyxNQUFSLENBQWUsaUJBQWY7QUFDR0MsWUFESCxDQUNjLGtCQURkLEVBQ2tDbEIsZ0JBRGxDO0FBRUQsQ0EvQkQiLCJmaWxlIjoic2VhcmNoLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIFNlYXJjaENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoU2VhcmNoU2VydmljZSkge1xuICAgICAgdGhpcy5TZWFyY2hTZXJ2aWNlID0gU2VhcmNoU2VydmljZTtcbiAgICB9XG5cbiAgICBvblNlYXJjaChmaWx0ZXJPYmopIHtcbiAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJpY2VGaWx0ZXIgPSBudWxsO1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLlNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0KGZpbHRlck9iaik7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJpY2VGaWx0ZXIgPSB0aGlzLlNlYXJjaFNlcnZpY2UuZ2V0UHJpY2VSYW5nZXModGhpcy5zZWFyY2hSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25QcmljZUZpbHRlcihmaWx0ZXJWYWwpe1xuICAgICAgbGV0IG5ld1Jlc3VsdCA9IHRoaXMuU2VhcmNoU2VydmljZS5maWx0ZXJSZXN1bHRzQmFzZWRPblByaWNlKHRoaXMub3JpZ2luYWxSZXN1bHQsIGZpbHRlclZhbCk7XG4gICAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICB9XG5cbiAgfVxuXG4gIFNlYXJjaENvbnRyb2xsZXIuJGluamVjdCA9IFsnU2VhcmNoU2VydmljZSddO1xuICBhbmd1bGFyLm1vZHVsZSgnbXlmbGlnaHQuc2VhcmNoJylcbiAgICAuY29udHJvbGxlcignU2VhcmNoQ29udHJvbGxlcicsIFNlYXJjaENvbnRyb2xsZXIpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
