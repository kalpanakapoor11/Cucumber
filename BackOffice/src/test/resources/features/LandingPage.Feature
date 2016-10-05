Feature: Validation of WBU backoffice HQ admin landing page
In order to validate Landing page
as a backoffice user
I navigate login to wbu.com

Scenario Outline: In order to verify wbu landing page
 		Given I am on the landing page of wbu website
		When I compare the user title with expected "<usertitle>" and confirm the usertype.
		Then I click on Manage users option
		Then I click on Manage stores option
		Then I click on Manage Master Products option
		Then I click on profile buton
		And I successfully validate HQ admin page landing page
 		
Examples:
		|usertitle	|
		|HQ_ADMIN	|
		

		
				
		
