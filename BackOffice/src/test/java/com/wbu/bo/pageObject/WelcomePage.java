package com.wbu.bo.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class WelcomePage extends AbstractPage {

	public WelcomePage(WebDriver driver) {
		super(driver);
	}
	
	public String getPageTitle(){
		return driver.findElement(By.xpath("title")).getText();
	}

}
