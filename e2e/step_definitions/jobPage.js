'use strict';

const {defineSupportCode} = require('cucumber');

const JobPage = require('../../pageObjects/jobPage');
const jobPage = new JobPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the following job url is opened: (.+)$/, (url) => {
        return jobPage.loadJobUrl(url);
    });

    When(/^the (.+) navigation link is clicked$/, (careers) => {
        return jobPage.navigateToCareerPage(careers);
    });

    Then(/^the title of the page should be: (.+)$/, (title) => {
        return jobPage.getTitleOfJobPage(title);
    });

    Then(/^the location of the job should be: (.+)$/, (location) => {
        return jobPage.getLocationOfJobPage(location);
    });

    Then(/^the hot label should be displayed$/, () => {
        return jobPage.isHotLabelVisible();
    });

    Then(/^the relocation label should be displayed$/, () => {
        return jobPage.isRelocationLabelVisible();
    });

    Then(/^the apply form should be displayed$/, () => {
        return jobPage.isApplyFormVisible();
    });

});