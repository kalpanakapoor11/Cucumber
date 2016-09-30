package Step;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	@Before
	public void setUp(){
	 System.out.println("Launch the browser");	
	}
	@Before("@prod")
	public void setUpprod(){
	 System.out.println("Launch the browser for prod");	
	}
	
	@Given("^user navigates to facebook website$")
	public void user_navigates_to_facebook_website() throws Throwable {
		System.out.println("@Given: User Navigates to Facebook.com");
		
	}

	@When("^user validates to homepage title$")
	public void user_validates_to_homepage_title() throws Throwable {
		System.out.println("@When:User validates to homepage ");
		
	}

	@Then("^user entered \"([^\"]*)\" username$")
	public void user_entered_username(String user) throws Throwable {
		System.out.println("@Then: user enter the "+user+" username");
		
	}

	@Then("^user entered \"([^\"]*)\" password$")
	public void user_entered_password(String pw) throws Throwable {
		System.out.println("And: user enter the "+pw+" password");
		
	}
	@And("^user selects the age category$")
	public void user_selects_the_age_category(DataTable table) throws Throwable {
		List<Map<String,String>> data=table.asMaps(String.class,String.class);
		System.out.println("And: user selects the age category: " +data.get(0).get("Age")+"-----Selected location as:"+data.get(0).get("Location"));
	}


	@Then("^user \"([^\"]*)\" successfully logged in$")
	public void user_successfully_logged_in(String logintype) throws Throwable {
		System.out.println("@Then user "+logintype+" be successfully logged in");
		
	}
	@After
	public void tearDown(){
	System.out.println("driver.quit()");
}
	@After("@prod")
	public void tearDownProd(){
	System.out.println("driver.quit() for prod");
}
}
