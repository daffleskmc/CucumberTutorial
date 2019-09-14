
# Note: This is my test for login and shopping of dress.
# Didn't separate into a different feature since I still don't know how to run multiple features.

Feature: ECom Login Feature


  Scenario: ECom Login Test Cases
    Given user is already in login page
    When the sign in button displays
    Then user enters email and password
    Then user clicks sign in button
    Then user is on home page

  #Scenario: User Shopping A Dress Test Case
    #Given user already in home page
    #Then user hovers dresses menu
    #Then user selects summer dress sub menu
    Then user hovers chiffon dress
    Then user adds to cart the chiffon dress
