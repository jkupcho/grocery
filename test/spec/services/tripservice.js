'use strict';

describe('Service: Tripservice', function () {

  // load the service's module
  beforeEach(module('groceryApp'));

  // instantiate service
  var Tripservice;
  beforeEach(inject(function (_Tripservice_) {
    Tripservice = _Tripservice_;
  }));

  it('should do something', function () {
    expect(!!Tripservice).toBe(true);
  });

});
