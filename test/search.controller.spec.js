describe('Search Controller', function(){

	var $controller, $scope;

	var createMockPromise = function(){

	}

	beforeEach(module('myflight'));

	beforeEach(inject(function(_$controller_, _SearchService_, $q, $rootScope) {
	    $controller = _$controller_;
	    SearchService = _SearchService_;
	    $scope = $rootScope.$new();
	    var defer = $q.defer();
	    defer.resolve([{

	    }]);
	    var promise = defer.promise;
	    spyOn(SearchService,'getResult').and.returnValue(promise);
	}));

	it('should set searchTriggered as true on onSearch', function(){
		var ctrl = $controller('SearchController',{
			$scope: $scope
		});
		ctrl.onSearch({});
		expect(ctrl.searchTriggered).toBe(true);
	});

	it('should set searchResult and searchTriggered values after getting result', function(){
		var ctrl = $controller('SearchController');
		var promise = ctrl.onSearch({});
		$scope.$apply();
		expect(ctrl.searchTriggered).toBe(false);
		expect(ctrl.searchResult).toBeDefined();	
		
	});

});