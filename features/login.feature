Feature: Login

  Scenario: User logs into Spark
    Given user is on the login page
    When user enters valid credentials
    Then user should see the dashboard