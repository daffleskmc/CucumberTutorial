$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/indeztruk/eclipse-workspace/CucumberTutorial/src/main/java/features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "# Note: This is my test for login and shopping of dress."
    },
    {
      "line": 3,
      "value": "# Didn\u0027t separate into a different feature since I still don\u0027t know how to run multiple features."
    }
  ],
  "line": 5,
  "name": "ECom Login Feature",
  "description": "",
  "id": "ecom-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "ECom Login Test Cases",
  "description": "",
  "id": "ecom-login-feature;ecom-login-test-cases",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the sign in button displays",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#Scenario: User Shopping A Dress Test Case"
    },
    {
      "line": 16,
      "value": "#Given user already in home page"
    },
    {
      "line": 17,
      "value": "#Then user hovers dresses menu"
    },
    {
      "line": 18,
      "value": "#Then user selects summer dress sub menu"
    }
  ],
  "line": 19,
  "name": "user hovers chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user adds to cart the chiffon dress",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_in_login_page()"
});
formatter.result({
  "duration": 11443152000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.signin_btn_displays()"
});
formatter.result({
  "duration": 60580300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_email_and_password()"
});
formatter.result({
  "duration": 219370000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_sign_in_button()"
});
formatter.result({
  "duration": 1576141300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3302666000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_hovers_chiffon_dress()"
});
formatter.result({
  "duration": 181356900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_adds_to_cart_the_chiffon_dress()"
});
formatter.result({
  "duration": 84157900,
  "status": "passed"
});
});