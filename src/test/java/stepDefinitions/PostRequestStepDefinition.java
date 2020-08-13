package stepDefinitions;

import java.util.Map;


import Methods.PostMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;

public class PostRequestStepDefinition {

	@Given("I want to execute postUser endpoint")
	public void i_want_to_execute_postUser_endpoint() {
		RestAssured.baseURI = "http://localhost:3000";
	}

	@When("I submit the POST request")
	public void i_submit_the_POST_request() {
		Map<String, String> response = PostMethod.postUserDetails();
		System.out.println(response);
	}

	@Then("I validate the response")
	public void i_validate_the_response() {
		
	}

}
