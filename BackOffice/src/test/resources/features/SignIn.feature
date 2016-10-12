@smoke
Feature: Validation of WBU app login
In order to validage login
as a app user
I navigate to http://qa_order.wbu.com/store/indianapolis

Scenario Outline: In order to validate wbu app login function
 		Given I am on the homepage of wbu website
		When I get the Title of the page
 		Then I entered "<Email>" as Email
 		Then I entered "<pass>" as pass 
 		Then I should be successfully logged in
 		Then I logout
 		

Examples:
		|Email				|pass		|
		|kkapoor@dminc.com	|testing1#	|
		|avasim@dminc.com	|testing1#	|
	
		