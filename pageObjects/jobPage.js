'use strict';

class jobPage {
    constructor() {
        this.desktop = element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile'));
        this.careerPageSearchForm = this.desktop.element(by.css('.job-search__form'));
        this.titleOfJobPage = element(by.css('.recruiting-page__header > h1'));
        this.locationOfJobPage = element(by.css('.recruiting-page__location'));
        this.applyForm = element(by.css('.right-container'));
        this.hotLabel = element(by.css('.recruiting-page__option-label'));
        this.relocationLabel = element(by.css('.vacancy-page__option-relocation'));
        this.jobId = element(by.css('.vacancy-page__id'));
        this.careerButton = careers => element(by.cssContainingText('.top-navigation__item-link', careers))
    }

    loadJobUrl(url) {
        browser.get(url);
        return browser.wait(this.applyForm.isDisplayed(), GLOBAL_TIMEOUT);
    }

    navigateToCareerPage(careers) {
        this.careerButton(careers).click();
        return browser.wait(this.careerPageSearchForm.isDisplayed(), GLOBAL_TIMEOUT);
    }
}

module.exports = jobPage;