package stepDefinitions;

import org.testng.Assert;

import Methods.GetMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class GetUserStepDefinition {

	@Given("I want to execute getUser endpoint")
	public void i_want_to_execute_getUser_endpoint() {
		RestAssured.baseURI = "http://localhost:3000/";
	}

	@When("I submit the Get request of particular user")
	public void i_submit_the_GET_request_of_particular_user() {
		GetMethod.getUserDetail();
	}

	@Then("I validate the response of user")
	public void i_validate_the_response_of_user() {
		Response response = GetMethod.getUserDetail();
		 
		System.out.println(response.getBody().asString());
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		System.out.println(statusCode);
	}
}
