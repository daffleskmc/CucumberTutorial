Feature: Free CRM Test

  Scenario Outline: Free CRM Test Scenarios
    Given user is in FreeCRM login page
    When user now enters "<username>" and "<password>"
    Then user to click contacts menu
    Then user to add new contacts
    #Then close browser
    
Examples:
	| username 							| password	|
	| daffles.kmc@gmail.com	| Dapdap23	|

