'use strict';function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  ProductListController =

  function ProductListController() {_classCallCheck(this, ProductListController);
    this.products = [{
      imageURL: 'https://cdn07.nnnow.com/web-images/medium/styles/V6OA5JYFVLI/1472823323568/1.jpg',
      title: 'Product 1',
      price: '22' },

    {
      imageURL: 'https://cdn15.nnnow.com/web-images/medium/styles/7NVARB80S1N/1473157768666/1.jpg',
      title: 'Product 2',
      price: '100' }];

  };



  angular.module('ecomm.catalog').
  component('productList', {
    templateUrl: 'scripts/app/catalog/product-list.tpl.html',
    controller: ProductListController,
    replace: true,
    bindings: {
      resuts: '=' } });


})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RDb250cm9sbGVyIiwicHJvZHVjdHMiLCJpbWFnZVVSTCIsInRpdGxlIiwicHJpY2UiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwicmVwbGFjZSIsImJpbmRpbmdzIiwicmVzdXRzIl0sIm1hcHBpbmdzIjoibUtBQUE7QUFDQSxDQUFDLFlBQVc7QUFDVixlQURVOztBQUdKQSx1QkFISTs7QUFLUixtQ0FBYztBQUNaLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBQztBQUNmQyxnQkFBUyxrRkFETTtBQUVmQyxhQUFPLFdBRlE7QUFHZkMsYUFBTyxJQUhRLEVBQUQ7O0FBS2hCO0FBQ0VGLGdCQUFTLGtGQURYO0FBRUVDLGFBQU8sV0FGVDtBQUdFQyxhQUFPLEtBSFQsRUFMZ0IsQ0FBaEI7O0FBVUQsR0FoQk87Ozs7QUFvQlZDLFVBQVFDLE1BQVIsQ0FBZSxlQUFmO0FBQ0dDLFdBREgsQ0FDYSxhQURiLEVBQzRCO0FBQ3hCQyxpQkFBYSwyQ0FEVztBQUV4QkMsZ0JBQVlULHFCQUZZO0FBR3hCVSxhQUFTLElBSGU7QUFJeEJDLGNBQVU7QUFDUkMsY0FBUSxHQURBLEVBSmMsRUFENUI7OztBQVNELENBN0JEIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIFByb2R1Y3RMaXN0Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBbe1xuICAgICAgICBpbWFnZVVSTDonaHR0cHM6Ly9jZG4wNy5ubm5vdy5jb20vd2ViLWltYWdlcy9tZWRpdW0vc3R5bGVzL1Y2T0E1SllGVkxJLzE0NzI4MjMzMjM1NjgvMS5qcGcnLFxuICAgICAgICB0aXRsZTogJ1Byb2R1Y3QgMScsXG4gICAgICAgIHByaWNlOiAnMjInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZVVSTDonaHR0cHM6Ly9jZG4xNS5ubm5vdy5jb20vd2ViLWltYWdlcy9tZWRpdW0vc3R5bGVzLzdOVkFSQjgwUzFOLzE0NzMxNTc3Njg2NjYvMS5qcGcnLFxuICAgICAgICB0aXRsZTogJ1Byb2R1Y3QgMicsXG4gICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgfV07XG4gICAgfVxuXG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnZWNvbW0uY2F0YWxvZycpXG4gICAgLmNvbXBvbmVudCgncHJvZHVjdExpc3QnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL2NhdGFsb2cvcHJvZHVjdC1saXN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IFByb2R1Y3RMaXN0Q29udHJvbGxlcixcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICByZXN1dHM6ICc9J1xuICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
