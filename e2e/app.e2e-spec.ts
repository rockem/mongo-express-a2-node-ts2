import {browser, element, by} from 'protractor';
import randomWords =  require('random-words');

describe('QuickStart E2E Tests', function () {

    let expectedMsg = 'Hello Angular';

    beforeEach(function () {
        browser.get('');
    });

    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    });

    it('should add new item', function () {
        let newItem = "e2e-" + randomWords(1)[0];
        createItem(newItem);
        expect(lastItem().getText()).toEqual(newItem);
    });

    let createItem = function (itemName: string) {
        element(by.id('item-add-desc')).sendKeys(itemName);
        element(by.css('[value="add"]')).click();
    };

    let lastItem = function () {
        return element.all(by.css('li')).last().element(by.id('item-desc'));
    };
});
