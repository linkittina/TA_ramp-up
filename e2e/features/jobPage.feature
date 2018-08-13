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

  Scenario Outline: 2.<n> Open a job page from URL and check UI
    Given the following job url <url> is opened
    Then the apply form should be displayed
    And the title of the page should be: <title>
    And the location of the job should be: <location>
    And the job ID should be: <id>
    And the hot label should be <hot_label>
    And the relocation label should be <relocation_label>

    Examples:
      | n | url                                                 | title                              | location              | id           | hot_label | relocation_label |
      | A | https://www.epam.com/careers/job-listings/job.42288 | Web Portal Business Analyst        | Dubai, UAE            | JOB #: 42288 | displayed | displayed        |
      | B | https://www.epam.com/careers/job-listings/job.24522 | Senior Business Analyst            | Atyrau, Kazakhstan    | JOB #: 24522 | hidden    | displayed        |
      | C | https://www.epam.com/careers/job-listings/job.30832 | Talent Acquisition Sourcing Expert | Monterrey, NL, Mexico | JOB #: 30832 | displayed | hidden           |
      | D | https://www.epam.com/careers/job-listings/job.42456 | Delivery Manager                   | Brussels, Belgium     | JOB #: 42456 | hidden    | hidden           |