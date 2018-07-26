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
    Then the title Java Developer of the page should be displayed

    When the Careers navigation link is clicked
    Then the search form should be displayed

  Scenario Outline: 2.<n> Open a job page from URL and check UI
    Given the following job url <url> is opened
    Then the title <title> of the page should be displayed
    And the location <location> of the job should be displayed
    And the job ID should be: <id>
    And the hot label should be displayed
    And the relocation label should be displayed
    And the apply form should be displayed

    Examples:
      | n | url                                                 | title                                       | location   | id           |
      | A | https://www.epam.com/careers/job-listings/job.42288 | Web Portal Business Analyst                 | Dubai, UAE | JOB #: 42288 |
      | B | https://www.epam.com/careers/job-listings/job.42377 | Account Manager, Bilingual Japanese/English | USA        | JOB #: 42377 |