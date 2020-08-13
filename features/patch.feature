#Author: vinod.duddukuri@oracle.com
Feature: To verify API Automation with Rest Assured Service

  @patchUser
  Scenario: To verify Rest service - PATCH Method
    Given I want to execute patchUser endpoint
    When I submit the PATCH request and validate the response