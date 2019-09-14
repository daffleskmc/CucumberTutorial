
# Note: This is my test for login and shopping of dress.
# Didn't separate into a different feature since I still don't know how to run multiple features.

Feature: ECom Login Feature


  Scenario Outline: ECom Login Test Cases
    Given user is already in login page
    When the sign in button displays
    Then user enters "<username>" and "<password>"
    Then user clicks sign in button
    Then user is on home page
    Then user hovers chiffon dress
    Then user adds to cart the chiffon dress
    Then close the broswer

Examples:
	| username 						| password	|
	| daffles4@gmail.com 	| 123456		|
	| daffles5@gmail.com	| 123456		|