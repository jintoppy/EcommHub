describe('Search service', function(){
	var SearchService, $httpBackend;

	var mockResponse = [{
			"airline": "Spice Jet",
			"airlineCode": "SG",
			"flightNumber": 241,
			"origin": "PNQ",
			"availableSeats": 29,
			"destination": "DEL",
			"price": 7413,
			"departure": "2013-01-01T13:55:00.000Z",
			"arrival": "2013-01-01T15:43:00.000Z",
			"duration": "1h 48m",
			"operationalDays": [7]
		},
		{
		"airline": "Jet Airways",
		"airlineCode": "9W",
		"flightNumber": 186,
		"origin": "PNQ",
		"availableSeats": 116,
		"destination": "DEL",
		"price": 6733,
		"departure": "2013-01-01T10:59:00.000Z",
		"arrival": "2013-01-01T13:32:00.000Z",
		"duration": "2h 33m",
		"operationalDays": [0, 2]
		},
		{
		"airline": "Indigo",
		"airlineCode": "6E",
		"flightNumber": 224,
		"origin": "DEL",
		"availableSeats": 87,
		"destination": "PNQ",
		"price": 5996,
		"departure": "2013-01-01T03:09:00.000Z",
		"arrival": "2013-01-01T05:25:00.000Z",
		"duration": "2h 16m",
		"operationalDays": [7]
	}
	];

	beforeEach(module('myflight'));

	beforeEach(inject(function(_SearchService_){
		SearchService = _SearchService_;
	}));

	beforeEach(inject(function(_$httpBackend_, AppConstant){
		$httpBackend = _$httpBackend_;
		$httpBackend.when('GET', AppConstant.API.GET_FLIGHTS)
				.respond(mockResponse);
	}));

	afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

	it('should have method getResult',function(){
		expect(SearchService.getResult).toBeDefined();
	});

	it('should give proper result if only one way is given', function(){
		var input = {
			oneway: {
				depDate: new Date('1/1/2013'),
				destination: 'DEL',
				origin: 'PNQ',
				passengerCnt: 1
			},
			return: {

			}
		}
		var promise = SearchService.getResult(input);
		$httpBackend.flush();
		promise.then(function(result){
			expect(result.length).toBe(2);
		});		
	});

	it('should give proper result if both oneway and return is given', function(){
		var input = {
			oneway: {
				depDate: new Date('1/1/2013'),
				destination: 'DEL',
				origin: 'PNQ',
				passengerCnt: 1
			},
			return: {
				depDate: new Date('1/1/2013'),
				destination: 'DEL',
				origin: 'PNQ',
				passengerCnt: 1
			}
		}
		var promise = SearchService.getResult(input);
		$httpBackend.flush();
		promise.then(function(result){
			expect(result.length).toBe(4);
		});		
	});


});