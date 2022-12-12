Feature: Testing Publish Article for valid user 

    A valid user should have a glitch free article publishing experince,
    A published article should be deletable 

    Scenario: A valid user should be able to publish a new article, then delete the published article  
        Given I lunch the conduit site
        And I click on sign in button
        When I fill username and password inputs and press on sing in button
        Then I should see the main page
        When I click New Article
        Then I fill the form and publish the article
        Then I should see the published article 
        Then I should be able to delete the published article
        Then I should see article deleted from the feeds page 



