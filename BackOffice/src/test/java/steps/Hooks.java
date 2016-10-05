package steps;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks
{

public static WebDriver driver;
public static Properties OR = new Properties();
public static Properties config = new Properties();
public static FileInputStream fis;
public static Logger log = Logger.getLogger("devpinoyLogger");
// public static ExcelReader excel=new
// ExcelReader(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\Credentials.xlsx");

@Before
/**
* Delete all cookies at the start of each scenario to avoid
* shared state between tests
*/
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

		driver.manage().deleteAllCookies();
	}
}
@After
/**
* Embed a screenshot in test report if test is marked as failed
*/
public void embedScreenshot(Scenario scenario) {
if(scenario.isFailed()) {
try {
scenario.write("Current Page URL is " + driver.getCurrentUrl());
byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
scenario.embed(screenshot, "image/png");
} 
catch (WebDriverException somePlatformsDontSupportScreenshots) {
System.err.println(somePlatformsDontSupportScreenshots.getMessage());
} 
}
driver.quit();
}
}