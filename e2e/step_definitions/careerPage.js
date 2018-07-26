'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the EPAM career site is opened$/, () => {
        return careerPage.load();
    });

    Then(/^the search form should be displayed$/, () => {
        return careerPage.isSearchFormVisible();
    });

    Then(/^the placeholder should be displayed$/, () => {
        return careerPage.isPlaceholderVisible();
    });

    Then(/^the keyword input should be displayed$/, () => {
        return careerPage.isKeywordInputVisible();
    });

    Then(/^the location drop-down should be displayed$/, () => {
        return careerPage.isLocationDropDownVisible();
    });

    Then(/^the skill drop-down should be displayed$/, () => {
        return careerPage.isSkillDropDownVisible();
    });

    Then(/^the find button should be displayed$/, () => {
        return careerPage.isFindButtonVisible();
    });

    When(/^the Find button is clicked$/, () => {
        return careerPage.find();
    });

    When(/^the keyword (.+) is entered$/, keyword => {
        return careerPage.roleName(keyword);
    });

    When(/^the skill drop-down is opened$/, () => {
        return careerPage.openSkillDropDown();
    });

    When(/^the skill (.+) is selected$/, skill => {
        return careerPage.skillName(skill);
    });

    Then(/^the SRL should be displayed$/, () => {
        return careerPage.isSrlVisible();
    });

    Then(/^the title of the first position should be (.+)$/, role => {
        return careerPage.getPositionTitle(role);
    });

    Then(/^the location of the position should be (.+)$/, location => {
        return careerPage.getLocation(location);
    });

    Then(/^the description of the position should be: (.+)$/, (text) => {
        return careerPage.getDescription(text);
    });

    Then(/^there should be 0 results on the SRL$/, () => {
        return careerPage.isZeroResults();
    });

});