package com.wbu.bo.pageObject;

import org.openqa.selenium.By;

public class HomePage extends AbstractPage {

	public HomePage() {
		
		super(driver);
		
	}
	
public RegisterPage RegisterPage(){
	driver.findElement(By.xpath(OR.getProperty("signUp"))).click();
	return new RegisterPage(driver);
}

}
