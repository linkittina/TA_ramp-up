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

    Then(/^the title of the page should( not)? be: (.+)$/, (not, title) => {
        if (not === " not") {
            return expect(jobPage.titleOfJobPage.getText()).to.eventually.not.equal(title);
        } else {
            return expect(jobPage.titleOfJobPage.getText()).to.eventually.equal(title);
        }
    });

    Then(/^the location of the job should( not)? be: (.+)$/, (not, location) => {
        if (not === " not") {
            return expect(jobPage.locationOfJobPage.getText()).to.eventually.not.equal(location);
        } else {
            return expect(jobPage.locationOfJobPage.getText()).to.eventually.equal(location);
        }
    });

    Then(/^the job ID should( not)? be: (.+)$/, (not, id) => {
        if (not === " not") {
            return expect(jobPage.jobId.getText()).to.eventually.not.equal(id);
        } else {
            return expect(jobPage.jobId.getText()).to.eventually.equal(id);
        }
    });

    Then(/^the hot label should be (displayed|hidden)$/, (state) => {
        return expect(jobPage.hotLabel.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the relocation label should be (displayed|hidden)$/, (state) => {
        return expect(jobPage.relocationLabel.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the apply form should be (displayed|hidden)$/, (state) => {
        return expect(jobPage.applyForm.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

});