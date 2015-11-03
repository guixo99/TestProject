var using = require('jasmine-data-provider');

describe('Protractor Demo Over Demo App', function(){
    var sideNavButton = $$('#sideNavButton');
    var sideNav = $('.md-sidenav-left');
    var contactList = $$('.contact-list li');


    beforeEach(function() {
        browser.get('http://localhost:9000/#/');
    });

    it('it should open the sidenav', function() {
        sideNavButton.click();
        expect(sideNav.isDisplayed()).toBe(true);
    });

    using([{n: 1},{n: 2}], function (data) {
        it('it should open a user dialog', function () {
            expect(contactList.count()).toBeGreaterThan(0);

            sideNavButton.click();
            ($('.contact-list li:nth-child(' + data.n + ') button')).click();
            browser.sleep(1000);

            expect(element(by.css('.info-dialog')).isPresent()).toBe(true);
        });
    });
});