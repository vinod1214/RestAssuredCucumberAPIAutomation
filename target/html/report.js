$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/delete.feature");
formatter.feature({
  "name": "To verify API Automation with Rest Assured",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify user details - Delete Method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteUser"
    }
  ]
});
formatter.step({
  "name": "I want to execute deleteUser endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteRequestStepDefinition.i_want_to_execute_deleteUser_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the Delete request of particular user and verify response",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteRequestStepDefinition.i_submit_the_Delete_request_of_particular_user_and_verify_response()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:features/get.feature");
formatter.feature({
  "name": "To verify API Automation with Rest Assured",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify Rest service - GET Method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@getUsers"
    }
  ]
});
formatter.step({
  "name": "I want to execute getUsersList endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_want_to_execute_getUsersList_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the GET request",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_submit_the_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the response body",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_validate_the_response_body()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify user details - Get Method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "name": "I want to execute getUser endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "GetUserStepDefinition.i_want_to_execute_getUser_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the Get request of particular user",
  "keyword": "When "
});
formatter.match({
  "location": "GetUserStepDefinition.i_submit_the_GET_request_of_particular_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the response of user",
  "keyword": "Then "
});
formatter.match({
  "location": "GetUserStepDefinition.i_validate_the_response_of_user()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:features/patch.feature");
formatter.feature({
  "name": "To verify API Automation with Rest Assured Service",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify Rest service - PATCH Method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@patchUser"
    }
  ]
});
formatter.step({
  "name": "I want to execute patchUser endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "PatchRequestStepDefinition.i_want_to_execute_patchUser_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the PATCH request and validate the response",
  "keyword": "When "
});
formatter.match({
  "location": "PatchRequestStepDefinition.i_submit_the_PATCH_request_and_validate_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:features/post.feature");
formatter.feature({
  "name": "To verify API Automation with Rest Assured Service",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify Rest service - POST Method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@postUser"
    }
  ]
});
formatter.step({
  "name": "I want to execute postUser endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "PostRequestStepDefinition.i_want_to_execute_postUser_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the POST request",
  "keyword": "When "
});
formatter.match({
  "location": "PostRequestStepDefinition.i_submit_the_POST_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the response",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequestStepDefinition.i_validate_the_response()"
});
formatter.result({
  "status": "passed"
});
});