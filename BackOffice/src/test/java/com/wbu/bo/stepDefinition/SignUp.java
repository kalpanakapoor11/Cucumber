package com.wbu.bo.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.wbu.bo.pageObject.HomePage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

WebDriver driver=new WebDriver();

public class SignUp {
	@When("^I click on register button$")
	public void i_click_on_register_button() throws Throwable {
		HomePage homepage=new HomePage(driver);   
	}

	@Then("^I entered \"([^\"]*)\" as email$")
	public void i_entered_as_email(String username) throws Throwable {
	    
	}
	
	@Then("^I entered \"([^\"]*)\" as confirmed password$")
	public void i_entered_as_confirmed_password(String arg1) throws Throwable {
	    
	}

	
	
	@Then("^I entered \"([^\"]*)\" as phone number$")
	public void i_entered_as_phone_number(String phone) throws Throwable {
	    
	}

	@Then("^I validate the message$")
	public void i_validate_the_message() throws Throwable {
	     
	    	}
	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
	    
	}

}
