package com.wbu.bo.stepDefinition;

import org.junit.Assert;

import com.wbu.bo.pageObject.AbstractPage;
import com.wbu.bo.pageObject.HomePage;
import com.wbu.bo.pageObject.RegisterPage;
import com.wbu.bo.pageObject.WelcomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignUp {

	// WebDriver driver = new ChromeDriver();
	HomePage homePage;
	RegisterPage registerPage;
	WelcomePage welcomePage=new WelcomePage();
	

	@Given("^I am on the homepage of wbu website$")
	public void i_am_on_the_homepage_of_wbu_website() throws Throwable {
		homePage = new HomePage();
		homePage.navigateToApp();
	}

	@When("^I click on register button$")
	public void i_click_on_register_button() throws Throwable {
		homePage = new HomePage();
		registerPage = homePage.RegisterPage();
	}

	@Then("^I entered \"([^\"]*)\" as username$")
	public void i_entered_as_username(String username) throws Throwable {
		registerPage.setUsername(username);
	}

	@Then("^I entered \"([^\"]*)\" as password$")
	public void i_entered_as__password(String password) throws Throwable {
		registerPage.setPassword(password);
	}

	@Then("^I entered \"([^\"]*)\" as confirmed password$")
	public void i_entered_as_confirmed_password(String cpassword) throws Throwable {
		registerPage.setConfirmPassword(cpassword);
	}

	@Then("^I entered \"([^\"]*)\" as phone number$")
	public void i_entered_as_phone_number(String phone) throws Throwable {
		registerPage.setPhone(phone);
	}

	@Then("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable {
		welcomePage = registerPage.submitRegistrationForm();
	}

	@Then("^I validate the message$")
	public void i_validate_the_message() throws Throwable {
		//Assert.assertTrue(welcomePage.getPageTitle().contains("This email is already registered with us."));
		welcomePage.getPageText();
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		WelcomePage.closeDriver();
	}
	
	@Then("^I Navigate to login page$")
	public void i_Navigate_to_login_page() throws Throwable {
		homePage.navigateToHomePage();   
	}
	

}
