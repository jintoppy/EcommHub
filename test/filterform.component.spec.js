describe('FillterForm Component', function(){

	var $componentController;

	beforeEach(module('myflight'));

	beforeEach(inject(function(_$componentController_) {
	    $componentController = _$componentController_;
	}));

	it('should have uiState defined', function(){
		var ctrl = $componentController('filterForm',null);
		expect(ctrl.uiState).toBeDefined();
		expect(ctrl.uiState.onewayVisible).toBe(true);
	});

	it('should change the active view on setActiveView', function(){
		var ctrl = $componentController('filterForm',null);
		expect(ctrl.uiState.onewayVisible).toBe(true);
		ctrl.setActiveView('return');
		expect(ctrl.uiState.onewayVisible).toBe(false);
		ctrl.setActiveView('one');
		expect(ctrl.uiState.onewayVisible).toBe(true);
	});

	it('should trigger onSearch binding on onFilterFormSubmit', function(){
		var onSearchSpy = jasmine.createSpy('onSearch');
		var bindings = {
			onSearch: onSearchSpy
		};
		var ctrl = $componentController('filterForm',null, bindings);
		var mockEvent = {
			preventDefault: angular.noop
		};
		var mockForm = {
			$valid: true
		};
		ctrl.filter = {};
		ctrl.onFilterFormSubmit(mockEvent,mockForm);
		expect(onSearchSpy).toHaveBeenCalledWith({
			filterObj: ctrl.filter
		});
	});

	it('should not trigger onSearch if form is invalid', function(){
		var onSearchSpy = jasmine.createSpy('onSearch');
		var bindings = {
			onSearch: onSearchSpy
		};
		var ctrl = $componentController('filterForm',null, bindings);
		var mockEvent = {
			preventDefault: angular.noop
		};
		var mockForm = {
			$valid: false
		};
		ctrl.filter = {};
		ctrl.onFilterFormSubmit(mockEvent,mockForm);
		expect(onSearchSpy).not.toHaveBeenCalledWith({
			filterObj: ctrl.filter
		});
	});


});