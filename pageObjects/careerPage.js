'use strict';

class careerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.desktop = element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile'));
        this.searchForm = this.desktop.element(by.css('.job-search__area'));
        this.placeholder = element(by.css('.job-search__input[placeholder="Keyword or job ID"]'));
        this.keywordInput = this.desktop.element(by.css('.job-search__input'));
        this.locationDropDown = this.desktop.element(by.css('.select-box-selection.single'));
        this.skillDropDown = this.desktop.element(by.css('.default-label'));
        this.findButton = this.desktop.element(by.css('.job-search__submit'));
        this.skillCheckBox = skill => this.desktop.element(by.cssContainingText('.checkbox-custom-label', skill));
        this.findButton = element(by.css('.job-search__submit'));
        this.srl = element(by.css('.search-result__item'));
        this.roleBox = element(by.css('.job-search__input.job-search__input--js-autocomplete'));
        this.positionTitle = element(by.css('.search-result__item-name'));
        this.positionLocation = element(by.css('.search-result__location'));
        this.positionDescription = element(by.css('.search-result__item-description'));
        this.zeroResults = element(by.cssContainingText('.job-search__error-message', 'Sorry, your search returned no results. Please try another combination.'));
        this.applyButton = element(by.cssContainingText('.search-result__item-apply', 'Apply'));

    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(this.logo.isDisplayed(), GLOBAL_TIMEOUT);
    }

    find() {
        this.findButton.click();
        browser.sleep(5000);
    }

    roleName(keyword) {
        this.roleBox.sendKeys(keyword);
        return browser.sleep(5000);
    }

    skillName(skill) {
        this.skillCheckBox(skill).click();
        browser.sleep(5000);
    }

    isSearchFormVisible() {
        return expect(this.searchForm.isDisplayed()).to.eventually.be.true;
    }

    isPlaceholderVisible() {
        return expect(this.placeholder.isDisplayed()).to.eventually.be.true;
    }

    isKeywordInputVisible() {
        return expect(this.keywordInput.isDisplayed()).to.eventually.be.true;
    }

    isLocationDropDownVisible() {
        return expect(this.locationDropDown.isDisplayed()).to.eventually.be.true;
    }

    isSkillDropDownVisible() {
        return expect(this.skillDropDown.isDisplayed()).to.eventually.be.true;
    }

    isFindButtonVisible() {
        return expect(this.findButton.isDisplayed()).to.eventually.be.true;
    }

    isSrlVisible() {
        return expect(this.srl.isDisplayed()).to.eventually.be.true;
    }

    isZeroResults() {
        return expect(this.zeroResults.isDisplayed()).to.eventually.be.true;
    }

    isApplyButtonVisible() {
        return expect(this.applyButton.isDisplayed()).to.eventually.be.true;
    }

    getPositionTitle(role) {
        return expect(this.positionTitle.getText()).to.eventually.equal(role);
    }

    getLocation(location) {
        return expect(this.positionLocation.getText()).to.eventually.equal(location);
    }

    getDescription(text) {
        return expect(this.positionDescription.getText()).to.eventually.equal(text);
    }

    getSkillDropDown() {
        this.skillDropDown.click();
    }

    getApplyButton() {
        this.applyButton.click();
    }

}

module.exports = careerPage;
