package com.wbu.bo.pageObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public abstract class AbstractPage {
	protected static WebDriver driver;
	public static Properties OR = new Properties();
	public static Properties config = new Properties();
	public static FileInputStream fis;
	public static Logger log = Logger.getLogger("devpinoyLogger");

	// public static ExcelReader excel=new
	// ExcelReader(System.getProperty("user.dir")+"\\src\\test\\resources\\properties\\Credentials.xlsx");

	static {
		try {
			fis = new FileInputStream(
					System.getProperty("user.dir") + "/src/test/resources/properties/OR.properties");
			OR.load(fis);
			log.debug("OR property file loaded");
			fis = new FileInputStream(System.getProperty("user.dir")
					+ "/src/test/resources/properties/config.properties");
			config.load(fis);
			log.debug("config property file loaded");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		if (config.getProperty("browser").equals("chrome")) {
			ChromeOptions options = new ChromeOptions();
			options.addArguments("chrome.switches","--disable-extensions");
			System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
			driver = new ChromeDriver(options);
			
		} else if (config.getProperty("browser").equals("ie")) {
			System.setProperty("webdriver.ie.driver", "IEDriverServer.exe");
			driver = new InternetExplorerDriver();

		} else if (config.getProperty("browser").equals("firefox")) {
			log.debug("firefox initialized");
			driver = new FirefoxDriver();

		}
		log.debug("Navigated to" + config.getProperty("url"));
	}
	
	
	public static void closeDriver() {
		driver.quit();
	}

	public static HomePage appLogout() {
		driver.findElement(By.xpath(OR.getProperty("logout"))).click();
		return new HomePage();
		
	}
}
