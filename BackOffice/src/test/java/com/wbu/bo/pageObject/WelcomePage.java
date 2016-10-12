package com.wbu.bo.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WelcomePage extends AbstractPage {

	public WelcomePage getPageText(){
		//System.out.println(driver.findElement(By.cssSelector("title")).getText());
		//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		//Wait<WebDriver> wait=new FluentWait<WebDriver>(driver)
				//.withTimeout(20,TimeUnit.SECONDS)
				//.withMessage("This is a user defined timeout")
				//.ignoring(NoSuchElementException.class);
		
				
	 //return wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("UserExists"))).getText();
		
		/*try {
			 WebDriverWait wait= new WebDriverWait(driver,10L);			
	         wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("TC"))).click();
	         return null;
	        } catch (ElementNotFoundException e) {
	        	e.printStackTrace();
	        }
	      */
		
		//Actions action = new Actions(driver);

		//action.moveToElement(driver.findElement(By.linkText(" Terms and Conditions."))).build().perform();

		//WebDriverWait wait = new WebDriverWait(driver,30);

		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(" Terms and Conditions.")));

		//driver.findElement(By.linkText(" Terms and Conditions.")).click();

		return this;
		
		//return driver.findElement(By.xpath("UserExists")).getText();
		
	}

}
