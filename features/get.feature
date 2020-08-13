#Author: vinod.duddukuri@oracle.com
Feature: To verify API Automation with Rest Assured

  @getUsers
  Scenario: To verify Rest service - GET Method
    Given I want to execute getUsersList endpoint
    When I submit the GET request
    Then I validate the response body
    
  @getUser
  Scenario: To verify user details - Get Method
     Given I want to execute getUser endpoint
     When I submit the Get request of particular user
     Then I validate the response of user
