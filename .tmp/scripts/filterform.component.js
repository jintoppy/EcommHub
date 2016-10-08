'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /* eslint-env browser */
(function () {
  'use strict';var

  FilterFormController = function () {

    function FilterFormController() {_classCallCheck(this, FilterFormController);
      this.filter = {
        oneway: {},
        return: {} };

      this.passengerList = [1, 2, 3, 4, 5];
      this.uiState = {
        onewayVisible: true };

    }_createClass(FilterFormController, [{ key: 'setUIState', value: function setUIState(
      modifier) {
        this.uiState = Object.assign(this.uiState, modifier);
      } }, { key: 'setActiveView', value: function setActiveView(
      view) {
        this.setUIState({
          onewayVisible: view === 'one' ? true : false });

      } }, { key: 'onFilterFormSubmit', value: function onFilterFormSubmit(
      e, form) {
        e.preventDefault();
        if (form.$valid) {
          this.onSearch({
            filterObj: this.filter });

        }
      } }]);return FilterFormController;}();



  angular.module('myflight.search').
  component('filterForm', {
    templateUrl: 'scripts/app/search/filter-form.tpl.html',
    controller: FilterFormController,
    replace: true,
    bindings: {
      onSearch: '&',
      priceFilter: '<',
      onPriceFilter: '&' } });


})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcmZvcm0uY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkZpbHRlckZvcm1Db250cm9sbGVyIiwiZmlsdGVyIiwib25ld2F5IiwicmV0dXJuIiwicGFzc2VuZ2VyTGlzdCIsInVpU3RhdGUiLCJvbmV3YXlWaXNpYmxlIiwibW9kaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWV3Iiwic2V0VUlTdGF0ZSIsImUiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCIkdmFsaWQiLCJvblNlYXJjaCIsImZpbHRlck9iaiIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb21wb25lbnQiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJyZXBsYWNlIiwiYmluZGluZ3MiLCJwcmljZUZpbHRlciIsIm9uUHJpY2VGaWx0ZXIiXSwibWFwcGluZ3MiOiJ3c0JBQUE7QUFDQSxDQUFDLFlBQVc7QUFDVixlQURVOztBQUdKQSxzQkFISTs7QUFLUixvQ0FBYztBQUNaLFdBQUtDLE1BQUwsR0FBYztBQUNaQyxnQkFBUSxFQURJO0FBRVpDLGdCQUFRLEVBRkksRUFBZDs7QUFJQSxXQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBckI7QUFDQSxXQUFLQyxPQUFMLEdBQWU7QUFDYkMsdUJBQWUsSUFERixFQUFmOztBQUdELEtBZE87QUFlR0MsY0FmSCxFQWVZO0FBQ2xCLGFBQUtGLE9BQUwsR0FBZUcsT0FBT0MsTUFBUCxDQUFjLEtBQUtKLE9BQW5CLEVBQTRCRSxRQUE1QixDQUFmO0FBQ0QsT0FqQk87QUFrQk1HLFVBbEJOLEVBa0JXO0FBQ2pCLGFBQUtDLFVBQUwsQ0FBZ0I7QUFDZEwseUJBQWVJLFNBQU8sS0FBUCxHQUFjLElBQWQsR0FBb0IsS0FEckIsRUFBaEI7O0FBR0QsT0F0Qk87QUF1QldFLE9BdkJYLEVBdUJjQyxJQXZCZCxFQXVCb0I7QUFDMUJELFVBQUVFLGNBQUY7QUFDQSxZQUFJRCxLQUFLRSxNQUFULEVBQWlCO0FBQ2YsZUFBS0MsUUFBTCxDQUFjO0FBQ1pDLHVCQUFXLEtBQUtoQixNQURKLEVBQWQ7O0FBR0Q7QUFDRixPQTlCTzs7OztBQWtDVmlCLFVBQVFDLE1BQVIsQ0FBZSxpQkFBZjtBQUNHQyxXQURILENBQ2EsWUFEYixFQUMyQjtBQUN2QkMsaUJBQWEseUNBRFU7QUFFdkJDLGdCQUFZdEIsb0JBRlc7QUFHdkJ1QixhQUFTLElBSGM7QUFJdkJDLGNBQVU7QUFDUlIsZ0JBQVUsR0FERjtBQUVSUyxtQkFBYSxHQUZMO0FBR1JDLHFCQUFlLEdBSFAsRUFKYSxFQUQzQjs7O0FBV0QsQ0E3Q0QiLCJmaWxlIjoiZmlsdGVyZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNsYXNzIEZpbHRlckZvcm1Db250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5maWx0ZXIgPSB7XG4gICAgICAgIG9uZXdheToge30sXG4gICAgICAgIHJldHVybjoge31cbiAgICAgIH07XG4gICAgICB0aGlzLnBhc3Nlbmdlckxpc3QgPSBbMSwgMiwgMywgNCwgNV07XG4gICAgICB0aGlzLnVpU3RhdGUgPSB7XG4gICAgICAgIG9uZXdheVZpc2libGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIHNldFVJU3RhdGUobW9kaWZpZXIpe1xuICAgICAgdGhpcy51aVN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLnVpU3RhdGUsIG1vZGlmaWVyKTtcbiAgICB9XG4gICAgc2V0QWN0aXZlVmlldyh2aWV3KXtcbiAgICAgIHRoaXMuc2V0VUlTdGF0ZSh7XG4gICAgICAgIG9uZXdheVZpc2libGU6IHZpZXc9PT0nb25lJz8gdHJ1ZTogZmFsc2UgXG4gICAgICB9KTtcbiAgICB9XG4gICAgb25GaWx0ZXJGb3JtU3VibWl0KGUsIGZvcm0pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChmb3JtLiR2YWxpZCkge1xuICAgICAgICB0aGlzLm9uU2VhcmNoKHtcbiAgICAgICAgICBmaWx0ZXJPYmo6IHRoaXMuZmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgYW5ndWxhci5tb2R1bGUoJ215ZmxpZ2h0LnNlYXJjaCcpXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyRm9ybScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvc2VhcmNoL2ZpbHRlci1mb3JtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IEZpbHRlckZvcm1Db250cm9sbGVyLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG9uU2VhcmNoOiAnJicsXG4gICAgICAgIHByaWNlRmlsdGVyOiAnPCcsXG4gICAgICAgIG9uUHJpY2VGaWx0ZXI6ICcmJyBcbiAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
