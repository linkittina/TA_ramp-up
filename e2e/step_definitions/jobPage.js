'use strict';

const {defineSupportCode} = require('cucumber');

const JobPage = require('../../pageObjects/jobPage');
const jobPage = new JobPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the following job url (.+) is opened$/, (url) => {
        return jobPage.loadJobUrl(url);
    });

    When(/^the (.+) navigation link is clicked$/, (careers) => {
        return jobPage.navigateToCareerPage(careers);
    });

    Then(/^the title (.+) of the page should be displayed$/, (title) => {
        return expect(jobPage.titleOfJobPage.getText()).to.eventually.equal(title);
    });

    Then(/^the location (.+) of the job should be displayed$/, (location) => {
        return expect(jobPage.locationOfJobPage.getText()).to.eventually.equal(location);
    });

    Then(/^the job ID should be: (.+)$/, (id) => {
        return expect(jobPage.jobId.getText()).to.eventually.equal(id);
    });

    Then(/^the hot label should be displayed$/, () => {
        return expect(jobPage.hotLabel.isDisplayed()).to.eventually.be.true
    });

    Then(/^the relocation label should be displayed$/, () => {
        return expect(jobPage.relocationLabel.isDisplayed()).to.eventually.be.true;
    });

    Then(/^the apply form should be displayed$/, () => {
        return expect(jobPage.applyForm.isDisplayed()).to.eventually.be.true;
    });

});