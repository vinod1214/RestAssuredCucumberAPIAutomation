package Methods;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;


public class PostMethod {

	public static  Map<String, String> postUserDetails() {
		Map<String, String> request = new HashMap<String, String>();
		request.put("firstname", "munirathnam");
		request.put("lastname", "singiri");
		request.put("subjectId", "3");
		given()
	    	.header("Content-Type","application/json")
	    	.contentType(io.restassured.http.ContentType.JSON)
		    .accept(io.restassured.http.ContentType.JSON)
	    	.body(request)
	    .when()
			.post("users");
		return request;
	}
}
