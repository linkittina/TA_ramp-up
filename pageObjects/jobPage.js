'use strict';

class jobPage {
    constructor() {
        this.titleOfJobPage = element(by.css('.vacancy-page__header > h1'));
        this.applyForm = element(by.css('.right-container'));
        this.hotLabel = element(by.css('.vacancy-page__option-hot'));
        this.relocationLabel = element(by.css('.vacancy-page__option-relocation'));
        this.careerButton = careers =>  element(by.cssContainingText('.top-navigation__link', careers))

    }

    load() {
        browser.get('https://www.epam.com/careers/job-listings/job.42288');
        return browser.wait(this.applyForm.isDisplayed(), GLOBAL_TIMEOUT);
    }

    getTitleOfJobPage(title) {
        return expect(this.titleOfJobPage.getText()).to.eventually.equal(title);
    }

    isHotLabelVisible() {
        return expect(this.hotLabel.isDisplayed()).to.eventually.be.true;
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