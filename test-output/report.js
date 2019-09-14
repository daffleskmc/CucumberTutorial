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
formatter.scenarioOutline({
  "line": 8,
  "name": "ECom Login Test Cases",
  "description": "",
  "id": "ecom-login-feature;ecom-login-test-cases",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
  "line": 14,
  "name": "user hovers chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user adds to cart the chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the broswer",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "ecom-login-feature;ecom-login-test-cases;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "ecom-login-feature;ecom-login-test-cases;;1"
    },
    {
      "cells": [
        "daffles4@gmail.com",
        "123456"
      ],
      "line": 20,
      "id": "ecom-login-feature;ecom-login-test-cases;;2"
    },
    {
      "cells": [
        "daffles5@gmail.com",
        "123456"
      ],
      "line": 21,
      "id": "ecom-login-feature;ecom-login-test-cases;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "ECom Login Test Cases",
  "description": "",
  "id": "ecom-login-feature;ecom-login-test-cases;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"daffles4@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "line": 14,
  "name": "user hovers chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user adds to cart the chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the broswer",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.signin_btn_displays()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "daffles4@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_enters_email_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_hovers_chiffon_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_adds_to_cart_the_chiffon_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "ECom Login Test Cases",
  "description": "",
  "id": "ecom-login-feature;ecom-login-test-cases;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"daffles5@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "line": 14,
  "name": "user hovers chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user adds to cart the chiffon dress",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the broswer",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.signin_btn_displays()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "daffles5@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_enters_email_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_hovers_chiffon_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_adds_to_cart_the_chiffon_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});