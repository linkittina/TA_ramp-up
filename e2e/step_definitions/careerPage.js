'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the EPAM career page is opened$/, () => {
        return careerPage.load();
    });

    When(/^the Find button is clicked$/, () => {
        return careerPage.clickFindButton();
    });

    When(/^the keyword (.+) is entered$/, keyword => {
        return careerPage.enterRoleName(keyword);
    });

    When(/^the skill drop-down is opened$/, () => {
        return careerPage.openSkillDropDown();
    });

    When(/^the skill (.+) is selected$/, skillName => {
        return careerPage.clickSkillCheckBox(skillName);
    });

    When(/^the apply button is clicked$/, () => {
        return careerPage.clickApplyButton();
    });

    Then(/^the search form should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.searchForm.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.searchForm.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the placeholder should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.placeholder.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.placeholder.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the location drop-down should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.locationDropDown.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.locationDropDown.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the skill drop-down should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.skillDropDown.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.skillDropDown.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the find button should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.findButton.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.findButton.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the SRL should be (displayed|hidden)$/, (state) => {
        if (state === 'displayed') {
            return expect(careerPage.srl.isPresent()).to.eventually.be.true;
        } else if (state === 'hidden') {
            return expect(careerPage.srl.isPresent()).to.eventually.be.false;
        }
    });

    Then(/^the title of the first position should( not)? be: (.+)$/, (not, role) => {
        if (not === " not") {
            return expect(careerPage.positionTitle.getText()).to.eventually.not.equal(role);
        } else {
            return expect(careerPage.positionTitle.getText()).to.eventually.equal(role);
        }
    });

    Then(/^the location of the first position should be: (.+)$/, location => {
        return expect(careerPage.positionLocation.getText()).to.eventually.equal(location);
    });

    Then(/^the description of the first position should( not)? be: (.+)$/, (not, text) => {
        if (not === "not") {
            return expect(careerPage.positionDescription.getText()).to.eventually.not.equal(text);
        } else {
            return expect(careerPage.positionDescription.getText()).to.eventually.equal(text);
        }
    });

    Then(/^there should be 0 results message on the SRL$/, () => {
        return expect(careerPage.zeroResultsMessage.isDisplayed()).to.eventually.be.true;
    });

    Then(/^the apply button should be displayed$/, () => {
        return expect(careerPage.applyButton.isDisplayed()).to.eventually.be.true;
    });

});