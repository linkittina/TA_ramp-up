'use strict';

class careerPage {
    constructor() {
        this.desktop = element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile'));
        this.logo = element(by.css('.header__logo'));
        this.jobPageTitle = element(by.css('.recruiting-page__header > h1'));

        //Search-form selectors
        this.searchForm = this.desktop.element(by.css('.job-search__form'));
        this.placeholder = element(by.css('.recruiting-search__input.js-autocomplete[placeholder="Keyword or job ID"]'));
        this.locationContainer = this.desktop.element(by.css('.select-box-selection.single'));
        this.locationDropDown = this.desktop.element(by.css('.select-box-results>.options.open'));
        this.skillContainer = this.desktop.element(by.css('.default-label'));
        this.skillDropDown = this.desktop.element(by.css('.multi-select-dropdown'));
        this.skillLabel = skill => this.desktop.element(by.cssContainingText('.checkbox-custom-label', skill));
        this.skillCheckBox = skillName => this.skillLabel(skillName).element(by.xpath('../input'));
        this.skillListItem = skillName => this.skillLabel(skillName).element(by.xpath('../..'));
        // this.skillCheckboxSelected = this.desktop.element(by.css('.checkbox-custom.is-a11y-only[aria-selected="true"]'));
        this.roleBox = element(by.css('input#new_form_job_search_1445745853_copy-keyword'));
        this.countrySelection = country => element(by.css(`li[aria-label="${country}"]`));
        this.citySelection = city => element(by.cssContainingText('.dropdown-cities .options > .option', city));
        this.findButton = this.desktop.element(by.css('.recruiting-search__submit'));

        // Search result list selectors
        this.srlItems = element.all(by.css('.search-result__item'));
        this.srl = element(by.css('.search-result'));
        this.zeroResultsMessage = element(by.cssContainingText('.search-result__error-message', 'Sorry, your search returned no results. Please try another combination.'));
        this.applyButton = element(by.cssContainingText('.search-result__item-apply', 'Apply'));
        this.positionTitle = element(by.css('.search-result__item-name'));
        this.positionLocation = element(by.css('.search-result__location'));
        this.positionDescription = element(by.css('.search-result__item-description'));
    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(() => this.logo.isDisplayed(), GLOBAL_TIMEOUT);
    }

    clickFindButton() {
        this.findButton.click();
        browser.sleep(500);
        return browser.wait(() => this.srl.isDisplayed(), GLOBAL_TIMEOUT);
    }

    clickApplyButton() {
        this.applyButton.click();
        return browser.wait(() =>this.jobPageTitle.isDisplayed(), GLOBAL_TIMEOUT);
    }

    clickSkillLabel(skillName) {
        this.skillListItem(skillName).click();
        return browser.wait(() => this.skillCheckBox(skillName).isSelected(), GLOBAL_TIMEOUT);
    }

    selectCountry(country) {
        return this.countrySelection(country).click();
    }

    selectCity(city) {
        return this.citySelection(city).click();
    }

    openSkillDropDown() {
        this.skillContainer.click();
        return browser.wait(() => this.skillDropDown.isDisplayed(), GLOBAL_TIMEOUT);
    }

    openLocationDropDown() {
        this.locationContainer.click();
        return browser.wait(() => this.locationDropDown.isDisplayed(), GLOBAL_TIMEOUT);
    }

    enterRoleName(keyword) {
        this.roleBox.sendKeys(keyword);
        return browser.sleep(5000);
    }

    isCountryExpanded(country) {
        return this.hasClass(this.countrySelection(country), 'dropdown-cities');
    }

    hasClass(element, className) {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(className) !== -1;
        });
    }

    getSrlItemCount() {
        return this.srlItems.count();
    }

}

module.exports = careerPage;