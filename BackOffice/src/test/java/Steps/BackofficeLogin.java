
package Steps;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackofficeLogin {

	public static WebDriver driver;
	public static Properties OR = new Properties();
	public static Properties config = new Properties();
	public static FileInputStream fis;
	public static Logger log = Logger.getLogger("devpinoyLogger");
	// public static ExcelReader excel=new
	// ExcelReader(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\Credentials.xlsx");

	@Before()
	public void setup() throws IOException {
		if (driver == null) {
			fis = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\test\\resources\\properties\\OR.properties");
			OR.load(fis);
			log.debug("OR property file loaded");
			fis = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\test\\resources\\properties\\config.properties");
			config.load(fis);
			log.debug("config property file loaded");

			if (config.getProperty("browser").equals("chrome")) {
				System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				driver = new ChromeDriver();

			} else if (config.getProperty("browser").equals("ie")) {
				System.setProperty("webdriver.ie.driver", "IEDriverServer.exe");
				driver = new InternetExplorerDriver();

			} else if (config.getProperty("browser").equals("firefox")) {
				log.debug("firefox initialized");
				driver = new FirefoxDriver();

			}
			log.debug("Navigated to" + config.getProperty("url"));
			driver.get(config.getProperty("url"));

			driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
			driver.manage().window().maximize();
			// DBManager.setMysqlDbConnection();
		}

	}

	@After()
	public void teardown() {
		driver.quit();
	}
	
	@Given("^I am on the homepage of wbu website$")
	public void i_am_on_the_homepage_of_wbu_website() throws Throwable {

		System.out.println(driver.getCurrentUrl());

		log.debug(driver.getTitle());

		log.debug("Inside login test");

	}

	@When("^I get the Title of the page$")
	public void i_get_the_Title_of_the_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
	}

	@Then("^user entered \"([^\"]*)\" as username$")
	public void user_entered_as_username(String user) throws Throwable {
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		driver.findElement(By.name(OR.getProperty("uname"))).sendKeys(user);

	}

	@Then("^user entered \"([^\"]*)\" as password$")
	public void user_entered_as_password(String pass) throws Throwable {
		// driver.manage().timeouts().implicitlyWait(15L,TimeUnit.SECONDS);
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(OR.getProperty("pword"))));
		driver.findElement(By.xpath(OR.getProperty("pword"))).sendKeys(pass);
	}

	@Then("^user \"([^\"]*)\" be successfully logged in$")
	public void user_logged_in() throws Throwable {
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		driver.findElement(By.xpath(OR.getProperty("login"))).click();
		log.debug("login successfully");
	}

}
