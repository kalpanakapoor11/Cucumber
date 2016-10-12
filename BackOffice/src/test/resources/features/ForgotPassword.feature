@smoke
Feature: Validation of WBU app Forgot Password Page
In order to validage "Forgot Password"
as a app user
I navigate to http://qa_order.wbu.com/store/indianapolis

Scenario Outline: In order to validate wbu app Forgot Password function
 		Given I am on the homepage of wbu website
 		When I click on forgot password link
		When I provide "<EmailID>" as user emailID
 		Then I click on reset password button 
 		
Examples:
		|EmailID			|
		|kkapoo@dminc.com	|
		|kkapoo@dminc.in	|
