Feature: this is a test for tagging

@SmokeTest
Scenario: login correctly
Given valid login

@RegressionTest
Scenario: login incorrectly
Given invalid login

@End2EndTest
Scenario: create account correctly
Given valid create account

Scenario: create account incorrectly
Given invalid create account