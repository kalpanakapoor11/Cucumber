package com.wbu.bo.pageObject;

import org.openqa.selenium.By;

public class ForgotPasswordResponsePage extends AbstractPage {
	
	public HomePage navigateToHomePage() {
		driver.findElement(By.xpath(OR.getProperty("logotop"))).click();
		return new HomePage();
	}

}
