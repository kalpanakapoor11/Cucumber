package com.wbu.bo.pageObject;

import org.openqa.selenium.By;

public class RegisterPage extends AbstractPage {

	public RegisterPage setUsername(String username) {
		driver.findElement(By.xpath(OR.getProperty("email"))).sendKeys(username);
		return new RegisterPage();
	}

	public RegisterPage setPassword(String password) {
		driver.findElement(By.xpath(OR.getProperty("pass"))).sendKeys(password);
		return new RegisterPage();
	}

	public RegisterPage setConfirmPassword(String password) {
		driver.findElement(By.xpath(OR.getProperty("cpass"))).sendKeys(password);
		return new RegisterPage();
	}

	public RegisterPage setPhone(String phone) {
		driver.findElement(By.xpath(OR.getProperty("phone"))).sendKeys(phone);
		return new RegisterPage();
	}

	public WelcomePage submitRegistrationForm() {
		driver.findElement(By.xpath(OR.getProperty("register"))).click();
		return new WelcomePage();
	}
	
	

}
