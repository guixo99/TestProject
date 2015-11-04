var using = require('jasmine-data-provider');
var converter = require('../miscellaneous/test-data-converter.js');


describe('Protactor Demo', function () {
    browser.get('/');

    var jsonData = converter('/home/g.xocotzin/Projects/TestProject/e2e/testfiles/users.csv');

    var sideNavButton = $$('#sideNavButton');
    var sideNav = $('.md-sidenav-left');
    var contactList = $$('.contact-list li');

    using(jsonData, function (data) {
        var dialogButtons;

        it('it should open the sidenav', function() {
            sideNavButton.click();
            expect(sideNav.isDisplayed()).toBe(true);
        });

        it('it should open a user dialog', function () {
            expect(contactList.count()).toBeGreaterThan(0);

            ($('.contact-list li:nth-child(' + data.n + ') button')).click().then(function () {
                expect(element(by.css('.info-dialog')).isPresent()).toBe(true);
            });

            dialogButtons = $$('.info-dialog .md-actions .md-button');
            dialogButtons.get(0).click();
        });
    });
});