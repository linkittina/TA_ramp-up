Feature: Job page UI
  As a user
  I want to open a job opportunity on the EPAM career site
  So that I can see the details of the selected job

  Scenario: 1. Open a job page from career page and back
    Given the EPAM career page is opened
    When the keyword Java Developer is entered
    And the Find button is clicked
    Then the apply button should be displayed

    When the apply button is clicked
    Then the title of the page should be: Java Developer

    When the Careers navigation link is clicked
    Then the search form should be displayed

  Scenario: 2. Open a job page from URL and check UI
    Given the following job url is opened: https://www.epam.com/careers/job-listings/job.42288
    Then the title of the page should be: Web Portal Business Analyst
    And the location of the job should be: Dubai, UAE
    And the hot label should be displayed
    And the relocation label should be displayed
    And the apply form should be displayed