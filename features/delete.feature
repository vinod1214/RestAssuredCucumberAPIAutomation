#Author: vinod.duddukuri@oracle.com
Feature: To verify API Automation with Rest Assured

  @deleteUser
  Scenario: To verify user details - Delete Method
     Given I want to execute deleteUser endpoint
     When I submit the Delete request of particular user and verify response