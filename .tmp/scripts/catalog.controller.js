'use strict';function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  CatalogController =

  function CatalogController(CatalogService) {_classCallCheck(this, CatalogController);
    this.CatalogService = CatalogService;
  };



  CatalogController.$inject = ['CatalogService'];
  angular.module('ecomm.catalog').
  controller('CatalogController', CatalogController);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nQ29udHJvbGxlciIsIkNhdGFsb2dTZXJ2aWNlIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoibUtBQUE7QUFDQSxDQUFDLFlBQVc7QUFDVixlQURVOztBQUdKQSxtQkFISTs7QUFLUiw2QkFBWUMsY0FBWixFQUE0QjtBQUMxQixTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNELEdBUE87Ozs7QUFXVkQsb0JBQWtCRSxPQUFsQixHQUE0QixDQUFDLGdCQUFELENBQTVCO0FBQ0FDLFVBQVFDLE1BQVIsQ0FBZSxlQUFmO0FBQ0dDLFlBREgsQ0FDYyxtQkFEZCxFQUNtQ0wsaUJBRG5DO0FBRUQsQ0FkRCIsImZpbGUiOiJjYXRhbG9nLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIENhdGFsb2dDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKENhdGFsb2dTZXJ2aWNlKSB7XG4gICAgICB0aGlzLkNhdGFsb2dTZXJ2aWNlID0gQ2F0YWxvZ1NlcnZpY2U7XG4gICAgfVxuXG4gIH1cblxuICBDYXRhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWydDYXRhbG9nU2VydmljZSddO1xuICBhbmd1bGFyLm1vZHVsZSgnZWNvbW0uY2F0YWxvZycpXG4gICAgLmNvbnRyb2xsZXIoJ0NhdGFsb2dDb250cm9sbGVyJywgQ2F0YWxvZ0NvbnRyb2xsZXIpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==