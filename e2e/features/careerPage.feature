Feature: Search functionality
  As a user
  I want to find job opportunities on the EPAM career site
  So that I can the open positions

  Background:
    Given the EPAM career page is opened
    Then the search form should be displayed
    And the SRL should be hidden

    # Positive cases
  Scenario: 1. - Quick UI check for search form
    And the placeholder should be displayed
    And the location drop-down should be displayed
    And the skill drop-down should be displayed
    And the find button should be displayed

  Scenario Outline: 2.<n> - <type> search
    When the keyword <keyword> is entered
    And the skill drop-down is opened
    And the skill <skill> is selected
    And the Find button is clicked
    Then the SRL should be displayed
    And the title of the first position should be: <role>
    And the location of the first position should be: <location>
    And the description of the first position should be: <description>
    And the SRL should have less than 3 results

    Examples:
      | n | type      | keyword        | skill                | role                             | location          | description                                                                                                                                                                                                                         |
      | A | Job title | Java Developer | Software Engineering | Java Developer                   | BUDAPEST, HUNGARY | Currently we are looking for a Java Developer for our Budapest office to make the team even stronger. In Hungary currently 1400+ IT Engineers help the world’s leading companies imagine, design, engineer and deliver software...  |
      | B | Job ID    | 18374          | Software Engineering | .NET (Web Application) Developer | BUDAPEST, HUNGARY | Currently we are looking for a .NET (Web Application) Developer for our Budapest office to make the team even stronger. In Hungary currently 1400+ IT Engineers help the world’s leading companies imagine, design, engineer and... |

  Scenario: 3. - Location search
    When the country Switzerland is selected
    And the city Zurich is selected
    And the Find button is clicked
    Then the title of the first position should be: .NET Developer
    And the location of the first position should be: ZURICH, SWITZERLAND

    # Negative cases/ Edge cases
  Scenario Outline: 4.<n> - <type> search
    When the keyword <keyword> is entered
    And the Find button is clicked
    Then there should be zero results message on the SRL
    And the SRL should have equal to 0 results

    Examples:
      | n | type                                    | keyword         |
      | A | Asterisk                                | *               |
      | B | Invalid search term                     | lorem ipsum     |
      | C | Invalid search term + special character | 汉语             |
      | D | Strict match                            | "Java"          |
      | E | Eliminate a keyword                     | Data -Big       |
      | F | Logical operator                        | UI OR Developer |

  Scenario Outline: 5.<n> - <type> search
    When the keyword <keyword> is entered
    And the Find button is clicked
    Then the SRL should have more than 0 results

    Examples:
      | n | type              | keyword  |
      | A | Uppercase         | BIG DATA |
      | B | Special character | world’s  |