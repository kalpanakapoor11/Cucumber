@smoke
Feature: Validation of WBU backoffice home page
In order to validage home page
as a backoffice user
I navigate to ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin

Scenario Outline: In order to validate wbu home page and login function
 		Given I am on the homepage of wbu website
		When I get the Title of the page
 		Then I entered "<username>" as username
 		Then I entered "<password>" as password 
 		Then I should be successfully logged in

Examples:
		|username	|password	|logintype	|
		|300_hqadmin|wbu@1234	|should		|
				
		
