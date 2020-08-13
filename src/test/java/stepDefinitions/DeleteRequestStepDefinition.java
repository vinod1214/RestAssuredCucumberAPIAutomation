package stepDefinitions;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class DeleteRequestStepDefinition {

	@Given("I want to execute deleteUser endpoint")
	public void i_want_to_execute_deleteUser_endpoint() {
		RestAssured.baseURI = "http://localhost:3000/";
	}

	@When("I submit the Delete request of particular user and verify response")
	public void i_submit_the_Delete_request_of_particular_user_and_verify_response() {
		Response response = RestAssured.given().when().delete("users/5");
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
	}

}
