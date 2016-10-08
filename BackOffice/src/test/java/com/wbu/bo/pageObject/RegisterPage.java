package com.wbu.bo.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RegisterPage extends AbstractPage {

	public RegisterPage(WebDriver driver) {
		super(driver);
	}

	public RegisterPage setUsername(String username) {
		driver.findElement(By.xpath(OR.getProperty("email"))).sendKeys("username");
		return new RegisterPage(driver);
	}

	public RegisterPage setPassword(String password) {
		driver.findElement(By.xpath(OR.getProperty("pass"))).sendKeys("password");
		return new RegisterPage(driver);
	}

	public RegisterPage setConfirmPassword(String password) {
		driver.findElement(By.xpath(OR.getProperty("cpass"))).sendKeys("password");
		return new RegisterPage(driver);
	}

	public RegisterPage setPhone(String password) {
		driver.findElement(By.xpath(OR.getProperty("phone"))).sendKeys("phone");
		return new RegisterPage(driver);
	}

	public WelcomePage submitRegistrationForm() {
		driver.findElement(By.xpath(OR.getProperty("register"))).click();
		return new WelcomePage(driver);
	}

}
