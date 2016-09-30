@bvt
Feature: Production

In order to perform successfull login in production
As a user
I want to enter correct username and password
Background:
		Given user navigates to facebook website
 		When user validates to homepage title
		

Scenario Outline: In order to verify login to facebook.com
 		Then user entered "<username>" username
 		Then user entered "<password>" password 
 		And user selects the age category
 		|Age		|Location	|
 		|below 18	|India		|
 		|above 18	|USA		|
 		Then user "<logintype>" successfully logged in
 		
Examples:
|username	|password	|logintype	|
|valid		|valid		|should		|
|invalid	|invalid	|should not	|

Scenario Outline: In order to verify login to production
 		
 		Then user entered the "<user>"
 		And user entered the "<pass>" 
 		Then user "<login>" be successfully logged in
 		Then user "<logintype>" successfully logged in
 		Examples:
|username	|password	|logintype	|
|valid		|valid		|should		|
|invalid	|invalid	|should not	|
