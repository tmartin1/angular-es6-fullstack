'use strict';

describe('The main dashboard view', function () {
    var page;

    beforeEach(function () {
        page = require('./dashboard.po');
    });

    it('should include jumbotron with correct data', function () {
        browser.get('/');
        expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
        expect(page.imgEl.getAttribute('src'))
            .toMatch(/assets\/images\/yeoman.png$/);
        expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
    });

    it('should list more than 5 awesome things', function () {
        expect(page.thumbnailEls.count()).toBeGreaterThan(5);
    });

});
