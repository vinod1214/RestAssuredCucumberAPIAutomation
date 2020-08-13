package Methods;

import static io.restassured.RestAssured.given;

import io.restassured.response.Response;

public class GetMethod {

	public static Response getUsersList() {
		return given()
				   .get("users");
	}
	
	public static Response getUserDetail() {
		return given()
				   .get("users/1");
	}
}
