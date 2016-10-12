package com.wbu.bo.pageObject;

import org.openqa.selenium.By;

public class ForgotPasswordPage extends AbstractPage {
	
	
		public ForgotPasswordResponsePage submitEmail(){
		driver.findElement(By.xpath(OR.getProperty("submitpass"))).click();
		return new ForgotPasswordResponsePage();
		
	}

	public ForgotPasswordPage provideEmail(String emailID) {
		driver.findElement(By.name(OR.getProperty("uname"))).sendKeys(emailID);
		return this;
		
	}
	
	

}
