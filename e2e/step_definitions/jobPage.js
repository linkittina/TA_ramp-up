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

    Then(/^the title of the page should be: (.+)$/, (title) => {
        return expect(jobPage.titleOfJobPage.getText()).to.eventually.equal(title);
    });

    Then(/^the location of the job should be: (.+)$/, (location) => {
        return expect(jobPage.locationOfJobPage.getText()).to.eventually.equal(location);
    });

    Then(/^the job ID should be: (.+)$/, (id) => {
        return expect(jobPage.jobId.getText()).to.eventually.equal(id);
    });

    Then(/^the hot label should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(jobPage.hotLabel.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(jobPage.hotLabel.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the relocation label should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(jobPage.relocationLabel.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(jobPage.relocationLabel.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the apply form should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(jobPage.applyForm.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(jobPage.applyForm.isPresent()).to.eventually.be.false;
        }
    });

});