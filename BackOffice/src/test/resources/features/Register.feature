@smoke
Feature: Validation of WBU app signup
In order to validage signup
as a app user
I navigate to http://qa_order.wbu.com/store/indianapolis

Scenario Outline: In order to validate wbu app signup function
 		Given I am on the homepage of wbu website
		When I click on register button
 		Then I entered "<username>" as email
 		And I entered "<password>" as password 
 		And I entered "<cpassword>" as confirmed password
 		And I entered "<phone>" as phone number
 		Then I click on register button
 		Then I validate the message
 		And I close the browser

Examples:
		|username		|password	|cpassword	|phone		|
		|abc5@dminc.com	|testing1#	|testing1#	|9876543456	|
	
		