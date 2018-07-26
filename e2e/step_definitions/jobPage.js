'use strict';

const {defineSupportCode} = require('cucumber');

const JobPage = require('../../pageObjects/jobPage');
const jobPage = new JobPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the EPAM Web Portal Business Analyst job page is opened$/, () => {
        return jobPage.load();
    });

    When(/^the (.+) navigation link is clicked$/, (careers) => {
        return jobPage.navigateToCareerPage(careers);
    });

    Then(/^the title of the page should be: (.+)$/, (title) => {
        return jobPage.getTitleOfJobPage(title);
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