Feature: Login Ninja Site Feature

Scenario: Login Ninja Site Test Scenario

Given user is in main page
When user sees login button
Then user enters email and password
	| email	|	password	|
	|	red.win@yahoo.com	|	test1234	|
	|	trip.view@yahoo.com	| test1234	|
Then user clicks login button
Then user is now in home page
Then close the browser