'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/^the EPAM career site is loaded$/, () => {
        return careerPage.load();
    });

    When(/^the Find button is clicked$/, () => {
        return careerPage.find();
    });

    When(/^the role (.+) is entered$/, role => {
        return careerPage.roleName(role);
    });

    When(/^the (country|city) (.+) is selected$/, (type, name) => {
        if (type === 'country') {
            return careerPage.openLocationDropDown().then(() => {
                if (!careerPage.isCityVisible()) {
                    return careerPage.selectCountry(name);
                }
            });
        }
        else if (type === 'city') {
            return careerPage.selectCity(name);
        }
    });

    // When(/^the city Debrecen is selected$/, () => {
    //     return careerPage.citySelection();
    // });

    When(/^the following skills are selected: Software Engineering, Software Test Engineering$/, () => {
        return careerPage.skillSelection();
    });

    Then(/^the SRL should be displayed$/, () => {
        return careerPage.isSrlVisible();
    });

    Then(/^the title of the position should be (.+)$/, role => {
        return careerPage.getPositionTitle(role);
    });

    Then(/^the location of the position should be (.+)$/, location => {
        return careerPage.getLocation(location);
    });

    Then(/^the hot label of the position should be (.+)$/, visibility => {
        return careerPage.isHotLabelVisible(visibility);
    });

    Then(/^an open position should be displayed$/, () => {
        return careerPage.isAnyPositionAvailable();
    });

    Then(/^the description of the position should start with: (.+)$/, (text) => {
        return careerPage.getDescription(text);
    });

    Then(/^the following positions should be displayed:$/, (dataTable) => {
        return careerPage.getAvailablePositions(dataTable);
    });

});