package stepDefinitions;

import org.testng.Assert;

import Methods.GetMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class GetRequestStepDefinition {

	@Given("I want to execute getUsersList endpoint")
	public void i_want_to_execute_getUsersList_endpoint() {
		RestAssured.baseURI = "http://localhost:3000/";
	}

	@When("I submit the GET request")
	public void i_submit_the_GET_request() {
		GetMethod.getUsersList();
	}

	@Then("I validate the response body")
	public void i_validate_the_response_body() {
		Response response = GetMethod.getUsersList();
		 
		System.out.println(response.getBody().asString());
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		System.out.println(statusCode);
	}
}
