package com.wbu.bo.stepDefinition;

import org.testng.Assert;

import com.wbu.bo.pageObject.AbstractPage;
import com.wbu.bo.pageObject.HomePage;
import com.wbu.bo.pageObject.LandingPage;
import com.wbu.bo.pageObject.WelcomePage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {
	
	HomePage homePage=new HomePage();
	LandingPage landingPage=new LandingPage();
	WelcomePage welcomePage=new WelcomePage();
	AbstractPage abstractPage;


	@When("^I get the Title of the page$")
	public void i_get_the_Title_of_the_page() throws Throwable {
		Assert.assertEquals(HomePage.getPageTitle(), "Wild Birds Unlimited");

	}

	@Then("^I entered \"([^\"]*)\" as Email$")
	public void i_entered_as_Email(String Email) throws Throwable {
		homePage.setEmail(Email);
		}

	@Then("^I entered \"([^\"]*)\" as pass$")
	public void i_entered_as_pass(String pass) throws Throwable {
		homePage.setPass(pass);
	}

	@Then("^I should be successfully logged in$")
	public void i_should_be_successfully_logged_in() throws Throwable {
		homePage.submitLogin();
	}
	@Then("^I logout$")
	public void i_logout() throws Throwable {
	    HomePage.appLogout();
	}

}
