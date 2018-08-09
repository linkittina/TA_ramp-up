'use strict';

class careerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.desktop = element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile'));
        this.searchForm = this.desktop.element(by.css('.job-search__form'));
        this.placeholder = element(by.css('.recruiting-search__input.js-autocomplete[placeholder="Keyword or job ID"]'));
        this.locationDropDown = this.desktop.element(by.css('.select-box-selection.single'));
        this.skillDropDown = this.desktop.element(by.css('.default-label'));
        this.findButton = this.desktop.element(by.css('.recruiting-search__submit'));
        this.skillCheckBox = skill => this.desktop.element(by.cssContainingText('.checkbox-custom-label', skill));
        this.srl = element(by.css('.search-result__item'));
        this.roleBox = element(by.css('input#new_form_job_search_1445745853_copy-keyword'));
        this.positionTitle = element(by.css('.search-result__item-name'));
        this.positionLocation = element(by.css('.search-result__location'));
        this.positionDescription = element(by.css('.search-result__item-description'));
        this.zeroResults = element(by.cssContainingText('.search-result__error-message', 'Sorry, your search returned no results. Please try another combination.'));
        this.applyButton = element(by.cssContainingText('.search-result__item-apply', 'Apply'));

    }

    load() {
        browser.get('https://www.epam.com/careers');
    }

    clickFindButton() {
        this.findButton.click();
        browser.sleep(5000);
    }

    enterRoleName(keyword) {
        this.roleBox.sendKeys(keyword);
        return browser.sleep(5000);
    }

    clickSkillCheckBox(skillName) {
        this.skillCheckBox(skillName).click();
        browser.sleep(5000);
    }

    openSkillDropDown() {
        this.skillDropDown.click();
    }

    clickApplyButton() {
        this.applyButton.click();
    }

}

module.exports = careerPage;
