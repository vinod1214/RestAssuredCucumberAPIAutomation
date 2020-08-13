package stepDefinitions;

import java.util.Map;

import Methods.PatchMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;

public class PatchRequestStepDefinition {

	@Given("I want to execute patchUser endpoint")
	public void i_want_to_execute_patchUser_endpoint() {
		RestAssured.baseURI = "http://localhost:3000/";
	}

	@When("I submit the PATCH request and validate the response")
	public void i_submit_the_PATCH_request_and_validate_the_response() {
	    Map<String, String> response = PatchMethod.patchUserDetails();
	    System.out.println(response.toString());
	}

}
