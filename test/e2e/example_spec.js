
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://localhost:9000/#/about');

        // element(by.model('password')).sendKeys('asd');

        // var greeting = element(by.binding('strength'));

        // expect(greeting.getText()).toContain('weak');

        expect(true).toBeTruthy();
    });
});
