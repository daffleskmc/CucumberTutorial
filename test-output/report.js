$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/indeztruk/eclipse-workspace/CucumberTutorial/src/main/java/features/loginNinjaSite.feature");
formatter.feature({
  "line": 1,
  "name": "Login Ninja Site Feature",
  "description": "",
  "id": "login-ninja-site-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Ninja Site Test Scenario",
  "description": "",
  "id": "login-ninja-site-feature;login-ninja-site-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in main page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user sees login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email and password",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "red.win@yahoo.com",
        "test1234"
      ],
      "line": 9
    },
    {
      "cells": [
        "trip.view@yahoo.com",
        "test1234"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is now in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.user_is_in_main_page()"
});
formatter.result({
  "duration": 9898119900,
  "status": "passed"
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.user_sees_login_button()"
});
formatter.result({
  "duration": 68071400,
  "status": "passed"
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.user_enters_email_and_password(DataTable)"
});
formatter.result({
  "duration": 409903100,
  "status": "passed"
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 386257200,
  "status": "passed"
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.user_is_now_in_home_page()"
});
formatter.result({
  "duration": 38639900,
  "status": "passed"
});
formatter.match({
  "location": "LoginNinjaTestStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 723477800,
  "status": "passed"
});
});