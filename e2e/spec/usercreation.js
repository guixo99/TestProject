var using = require('jasmine-data-provider');
var converter = require('../infrastructure/test-data-converter.js');


describe('Protactor Demo', function () {
    browser.get('/');

    jasmine.testData = converter(browser.params.filesTest + 'users.csv');

    var sideNavButton = $$('#sideNavButton');
    var sideNav = $('.md-sidenav-left');
    var contactList = $$('.contact-list li');

    using(jasmine.testData, function (data) {
        var dialogButtons;

        it('it should open a user dialog', function () {
            expect(contactList.count()).toBeGreaterThan(0);

            sideNavButton.click();
            ($('.contact-list li:nth-child(' + data.n + ') button')).click().then(function () {
                expect(element(by.css('.info-dialog')).isPresent()).toBe(true);
            });

            dialogButtons = $$('.info-dialog .md-actions .md-button');
            dialogButtons.get(0).click();
        });
    });

    afterAll(function () {
        browser.sleep(1000);
    });
});