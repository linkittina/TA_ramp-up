'use strict';

class careerPage {
    constructor() {
        this.desktop = element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile'));
        this.logoSelector = element(by.css('.header__logo'));
        this.findButtonSelector = element(by.css('.job-search__submit'));
        this.srlSelector = element(by.css('.search-result__item'));
        this.roleBoxSelector = element(by.css('.job-search__input.job-search__input--js-autocomplete'));
        this.locationDropDownSelector = element(by.css('.select-box-selection.single'));
        this.countrySelectionSelector = country => element(by.cssContainingText('li .option', '" + city + "'));
        this.citySelectionSelector = city =>  element(by.cssContainingText('ul li .option', '" + city + "'));
        this.autoCompleteSelector = element(by.css('.autocomplete-suggestion'));
        this.positionTitleSelector = element(by.css('.search-result__item-name'));
        this.positionLocationSelector = element(by.css('.search-result__location'));
        this.hotPositionSelector = element(by.css('.search-result__item-type.search-result__item-type--hot'));
        this.positionDescriptionSelector = element(by.css('.search-result__item-description'));
        this.skillsDropDownSelector = element(by.css('.default-label'));
        this.skillSoftwareEngineeringSelector = element(by.cssContainingText('.checkbox-custom-label', 'Software Engineering'));
        this.skillSoftwareTestEngineeringSelector = element(by.cssContainingText('.checkbox-custom-label', 'Software Test Engineering'));
    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(this.logoSelector.isDisplayed(), GLOBAL_TIMEOUT);
    }

    find() {
        this.findButtonSelector.click();
        browser.sleep(5000);
        return browser.wait(this.srlSelector.isDisplayed(), GLOBAL_TIMEOUT);
    }

    roleName(role) {
        this.roleBoxSelector.sendKeys(role);
        browser.sleep(5000);
        return browser.wait(this.autoCompleteSelector.isDisplayed(), GLOBAL_TIMEOUT);
    }

    openLocationDropDown() {
        return this.locationDropDownSelector.click();
    }

    selectCountry(country) {
        return this.countrySelectionSelector(country).click();
    }

    selectCity(city) {
        return this.citySelectionSelector(city).click();
    }

    isCountryExpanded(country) {
        return this.countrySelectionSelector(country).hasClass('dropdown-cities');
    }

    isCityVisible(city) {
        return this.citySelectionSelector(city).isDisplayed();
    }

    citySelection() {
        browser.sleep(5000);
        return this.citySelectionSelector.click();
    }

    skillSelection() {
        this.skillsDropDownSelector.click();
        browser.sleep(1000);
        this.skillSoftwareEngineeringSelector.click();
        this.skillSoftwareTestEngineeringSelector.click();
    }

    isSrlVisible() {
        return expect(this.srlSelector.isDisplayed()).to.eventually.be.true;
    }

    getPositionTitle(role) {
        return expect(this.positionTitleSelector.getText()).to.eventually.contain(role);
    }

    getLocation(location) {
        return expect(this.positionLocationSelector.getText()).to.eventually.contain(location);
    }

    isHotLabelVisible(visibility) {
        return expect(this.hotPositionSelector.isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    }

    isAnyPositionAvailable() {
        return expect(this.srlSelector.isDisplayed()).to.eventually.be.true;
    }

    getDescription(text) {
        return expect(this.positionDescriptionSelector.getText()).to.eventually.contain(text);
    }

    getAvailablePositions(dataTable) {
        const getColumnOfDataTable = (rawTable, index) => {
            index = (index === undefined ? 0 : index);
            return rawTable.raw().map(subarr => subarr[index]);
        };
        const itemByText = text => this.positionTitleSelector;
        const checkVisibility = () => {
            return Promise.all(dataArray.map(text => itemByText(text).isDisplayed()))
                .then(result => expect(result.every(Boolean)).to.be.true)
        };
        let dataArray = getColumnOfDataTable(dataTable);
    }
}

module.exports = careerPage;
