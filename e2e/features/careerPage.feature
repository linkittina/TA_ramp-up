Feature: EPAM career site tests
  As a user
  I want to visit the EPAM career site
  So that I can apply for a job

  Scenario Outline: CAREER_1.<n> - Filtered search by position and location
    Given the EPAM career site is loaded
    When the role <role> is entered
    And the country Hungary is selected
    And the city Debrecen is selected
    And the Find button is clicked
    Then an open position should be displayed
    And the title of the position should be <role>
    And the location of the position should be <location>
    And the hot label of the position should be <priority>
    And the description of the position should start with: <description>

    Examples:
      | n | role                     | location          | priority  | description                                                                     |
      | A | Test Automation Engineer | DEBRECEN, HUNGARY | hidden    | Currently we are looking for a Test Automation Engineer for our Debrecen office |
      | B | Java Developer           | DEBRECEN, HUNGARY | displayed | Currently we are looking for a Java Developer for our Debrecen office           |

  Scenario: CAREER_1. - Filtered search by skills and location
    Given the EPAM career site is loaded
    When the Find button is clicked
    Then the SRL should be displayed
    When the country Hungary is selected
    And the city Debrecen is selected
    And the following skills are selected: Software Engineering, Software Test Engineering
    And the Find button is clicked
    Then the following positions should be displayed:
      | Test Automation Engineer |
      | Java Developer           |
      | UI Developer             |