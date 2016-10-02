package Steps;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackofficeLogin extends TestBase{
		
	
@Given("^I am on the homepage of wbu website$")
public void i_am_on_the_homepage_of_wbu_website() throws Throwable {
		System.out.println("Hello");
	   // driver.get("http://ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin");
	}


	@When("^I get the Title of the page$")
	public void i_get_the_Title_of_the_page() throws Throwable {
	    
	     
	}@Before()
	public void setup() throws IOException{
		if(driver==null){
			fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\OR.properties");
			OR.load(fis);
			log.debug("OR property file loaded");
			fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\config.properties");
			config.load(fis);
			log.debug("config property file loaded");
			
			if(config.getProperty("browser").equals("chrome")){
				System.setProperty("webdriver.chrome.driver","chromedriver.exe");
				driver=new ChromeDriver();
			
				
			}else 
				if(config.getProperty("browser").equals("ie")){
				System.setProperty("webdriver.ie.driver","IEDriverServer.exe");
				driver=new InternetExplorerDriver();
				
			}else if(config.getProperty("browser").equals("firefox")){
				log.debug("firefox initialized");
				driver=new FirefoxDriver();
				
			}
			log.debug("Navigated to"+config.getProperty("url"));
			driver.get(config.getProperty("url"));
			driver.manage().timeouts().implicitlyWait(15L,TimeUnit.SECONDS);
			driver.manage().window().maximize();
			//DBManager.setMysqlDbConnection();
			}
		
		
	}
	
	@After()
	public void teardown(){
		driver.quit();
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
