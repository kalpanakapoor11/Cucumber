@smoke
Feature: Validation of WBU backoffice login page
In order to validage login page
as a backoffice user
I navigate to ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin

Scenario Outline: In order to verify login to wbu.com
 		Given I am on the homepage of wbu website
		When I get the Title of the page
 		Then user entered "<username>" username
 		Then user entered "<password>" password 
 		Then user "<logintype>" successfully logged in

Examples:
		|username	|password	|logintype	|
		|300_hqadmin|wbu@1234	|should		|
		