
package com.wbu.bo.stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {

	/*private WebDriver driver;
	private Properties OR;

	public Login() {
		driver = Hooks.driver;
		OR = Hooks.OR;
	}*/
	
	@Given("^I am on the homepage of wbu website$")
	public void i_am_on_the_homepage_of_wbu_website() throws Throwable {
		//System.out.println(driver.getCurrentUrl());
	}

	@When("^I get the Title of the page$")
	public void i_get_the_Title_of_the_page() throws Throwable {
		System.out.println(driver.getTitle());
	}

	@Then("^I entered \"([^\"]*)\" as username$")
	public void i_entered_as_username(String user) throws Throwable {
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		driver.findElement(By.name(OR.getProperty("uname"))).sendKeys(user);
	}

	@Then("^I entered \"([^\"]*)\" as password$")
	public void i_entered_as_password(String pass) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(OR.getProperty("pword"))));
		driver.findElement(By.xpath(OR.getProperty("pword"))).sendKeys(pass);
	}

	@Then("^I should be successfully logged in$")
	public void i_should_be_successfully_logged_in() throws Throwable {
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		driver.findElement(By.xpath(OR.getProperty("login"))).click();
		// log.debug("login successfully");
	}
	
	}
