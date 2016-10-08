Feature: Validation of WBU backoffice login
In order to validage login
as a backoffice user
I navigate to http://qa_order.wbu.com/admin

Scenario Outline: In order to validate wbu backoffice login function
 		Given I am on the homepage of wbu website
		When I get the Title of the page
 		Then I entered "<username>" as username
 		Then I entered "<password>" as password 
 		Then I should be successfully logged in

Examples:
		|username			|password	|logintype	|
		|300_hqadmin		|wbu@1234	|should		|
	
		