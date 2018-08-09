'use strict';

class jobPage {
    constructor() {
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

    getTitleOfJobPage(title) {
        return expect(this.titleOfJobPage.getText()).to.eventually.equal(title);
    }

    getLocationOfJobPage(location) {
        return expect(this.locationOfJobPage.getText()).to.eventually.equal(location);
    }

    getJobId(id) {
        return expect(this.jobId.getText()).to.eventually.equal(id);
    }

    isHotLabelVisible() {
        return expect(this.hotLabel.isDisplayed()).to.eventually.be.true
    }

    isRelocationLabelVisible() {
        return expect(this.relocationLabel.isDisplayed()).to.eventually.be.true;
    }

    isApplyFormVisible() {
        return expect(this.applyForm.isDisplayed()).to.eventually.be.true;
    }

    navigateToCareerPage(careers) {
        this.careerButton(careers).click();
    }
}

module.exports = jobPage;