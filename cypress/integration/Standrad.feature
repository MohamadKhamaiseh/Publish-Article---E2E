Feature: Testing Login for valid user

    A valid user should have a glitch free login experince

    Scenario: A valid user should be able to login to conduit
        Given I lunch the conduit site
        And I click on sign in button
        When I fill username and password inputs and press on sing in button
        Then I should see the main page
