package com.wbu.bo.stepDefinition;

import com.wbu.bo.pageObject.ForgotPasswordPage;
import com.wbu.bo.pageObject.ForgotPasswordResponsePage;
import com.wbu.bo.pageObject.HomePage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ForgotPassword {
	HomePage homepage=new HomePage();
	ForgotPasswordPage forgotPasswordPage=new ForgotPasswordPage();
	ForgotPasswordResponsePage forgotPasswordResponse= new ForgotPasswordResponsePage();
	
	
	@When("^I click on forgot password link$")
	public void i_click_on_forgot_password_link() throws Throwable {
	   homepage.navigateToForgotPassword();
	}
	
	@When("^I provide \"([^\"]*)\" as user emailID$")
	public void i_provide_as_user_emailID(String EmailID) throws Throwable {
	   forgotPasswordPage.provideEmail(EmailID);
	}

	@Then("^I click on reset password button$")
	public void i_click_on_reset_password_button() throws Throwable {
	   forgotPasswordPage.submitEmail();
	}

	@Then("^I click on company logo$")
	public void i_click_on_company_logo() throws Throwable {
		forgotPasswordResponse.navigateToHomePage();
	}


}
