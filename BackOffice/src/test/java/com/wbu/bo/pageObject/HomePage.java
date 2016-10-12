package com.wbu.bo.pageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

public class HomePage extends AbstractPage {

	public RegisterPage RegisterPage() {
		driver.findElement(By.xpath(OR.getProperty("signup"))).click();
		//Alert alert=driver.switchTo().alert();
		//alert.dismiss();
		//driver.switchTo().g
		return new RegisterPage();
	}

	public HomePage navigateToApp() {
		driver.get(config.getProperty("url"));
		driver.manage().timeouts().implicitlyWait(15L, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		return this;
	}
	
	public static String getPageTitle(){
		String pageTitle=driver.getTitle();
		return pageTitle;
	}
	
	public HomePage setEmail(String Email) {
		driver.findElement(By.name(OR.getProperty("uname"))).sendKeys(Email);
		return this;
	}
	
	public HomePage setPass(String pass) {
		driver.findElement(By.xpath(OR.getProperty("pword"))).sendKeys(pass);
		return this;
	}

	public LandingPage submitLogin() {
		driver.findElement(By.xpath(OR.getProperty("login"))).click();
		return new LandingPage();
	}

	
	public HomePage navigateToHomePage() {
		driver.findElement(By.xpath(OR.getProperty("logo"))).click();
		return this;
	}

	public ForgotPasswordPage navigateToForgotPassword() {
		driver.findElement(By.xpath(OR.getProperty("forgot"))).click();
		return new ForgotPasswordPage();
	}

}
