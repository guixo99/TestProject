'use strict';

describe('Service: blogEntries', function () {

  // load the service's module
  beforeEach(module('testProjectApp'));

  // instantiate service
  var blogEntries;
  beforeEach(inject(function (_blogEntries_) {
    blogEntries = _blogEntries_;
  }));

  it('should do something', function () {
    expect(!!blogEntries).toBe(true);
  });

});
