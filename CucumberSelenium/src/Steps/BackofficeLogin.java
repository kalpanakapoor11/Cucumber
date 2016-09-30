package Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackofficeLogin {
	public static WebDriver driver;
	
	@Before
	public void setUp(){
	
		System.setProperty("webdriver.chrome.driver","chromedriver.exe");
		driver=new ChromeDriver();
	
	}
	
	@After
	public void teatDown(){
		driver.quit();
	}
	

@Given("^I am on the homepage of wbu website$")
public void i_am_on_the_homepage_of_wbu_website() throws Throwable {
		System.out.println("Hello");
	    driver.get("http://ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin");
	}

	@When("^I get the Title of the page$")
	public void i_get_the_Title_of_the_page() throws Throwable {
	    
	     
	}

	@Then("^user entered \"([^\"]*)\" username$")
	public void user_entered_username(String user) throws Throwable {
	    
	     
	}

	@Then("^user entered \"([^\"]*)\" password$")
	public void user_entered_password(String pass) throws Throwable {
	    
	     
	}

	@Then("^user \"([^\"]*)\" successfully logged in$")
	public void user_successfully_logged_in(String logintype) throws Throwable {
	    
	     
	}

	

}
