#Author: vinod.duddukuri@oracle.com
Feature: To verify API Automation with Rest Assured Service

  @postUser
  Scenario: To verify Rest service - POST Method
    Given I want to execute postUser endpoint
    When I submit the POST request
    Then I validate the response