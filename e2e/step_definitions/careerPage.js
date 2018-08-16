'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the EPAM career page is opened$/, () => {
        return careerPage.load();
    });

    When(/^the keyword (.+) is entered$/, keyword => {
        return careerPage.enterRoleName(keyword);
    });

    When(/^the skill drop-down is opened$/, () => {
        return careerPage.openSkillDropDown();
    });

    When(/^the Find button is clicked$/, () => {
        return careerPage.clickFindButton();
    });

    When(/^the apply button is clicked$/, () => {
        return careerPage.clickApplyButton();
    });

    When(/^the skill (.+) is selected$/, skillName => {
        return careerPage.clickSkillCheckBox(skillName);
    });

    When(/^the (country|city) (.+) is selected$/, (type, name) => {
        if (type === 'country') {
            return careerPage.openLocationDropDown().then(() => {
                browser.sleep(10000);
                return careerPage.isCountryExpanded(name).then((expanded) => {
                    if (!expanded) {
                        browser.sleep(1000);
                        return careerPage.selectCountry(name);
                    }
                })
            })
        } else if (type === 'city') {
            browser.sleep(1000);
            return careerPage.selectCity(name);
        }
    });

    Then(/^there should be zero results message on the SRL$/, () => {
        return expect(careerPage.zeroResultsMessage.isPresent()).to.eventually.be.true;
    });

    Then(/^the search form should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.searchForm.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the placeholder should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.placeholder.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the location drop-down should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.locationContainer.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the skill drop-down should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.skillContainer.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the find button should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.findButton.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the SRL should be (displayed|hidden)$/, (state) => {
        return expect(careerPage.srl.isPresent()).to.eventually.be.equal(state === 'displayed');
    });

    Then(/^the title of the first position should( not)? be: (.+)$/, (not, role) => {
        if (not === " not") {
            return expect(careerPage.positionTitle.getText()).to.eventually.not.equal(role);
        } else {
            return expect(careerPage.positionTitle.getText()).to.eventually.equal(role);
        }
    });

    Then(/^the location of the first position should( not)? be: (.+)$/, (not, location) => {
        if (not === " not") {
            return expect(careerPage.positionLocation.getText()).to.eventually.not.equal(location);
        } else {
            return expect(careerPage.positionLocation.getText()).to.eventually.equal(location);
        }
    });

    Then(/^the description of the first position should( not)? be: (.+)$/, (not, text) => {
        if (not === "not") {
            return expect(careerPage.positionDescription.getText()).to.eventually.not.equal(text);
        } else {
            return expect(careerPage.positionDescription.getText()).to.eventually.equal(text);
        }
    });

    Then(/^the apply button should( not)? be displayed$/, (not) => {
        if (not === " not") {
            return expect(careerPage.applyButton.isDisplayed()).to.eventually.be.false;
        } else {
            return expect(careerPage.applyButton.isDisplayed()).to.eventually.be.true;
        }
    });

    Then(/^the SRL should have (more than|less than|equal to) (\d+) results$/, (compare, number) => {
        if (compare === 'more than') {
            return expect(careerPage.getSrlItemCount()).to.eventually.be.above(number);
        } else if (compare === 'less than') {
            return expect(careerPage.getSrlItemCount()).to.eventually.be.below(number);
        } else if (compare === 'equal to') {
            return expect(careerPage.getSrlItemCount()).to.eventually.be.equal(number);
        }

    });

});