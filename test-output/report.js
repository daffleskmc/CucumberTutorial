$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/indeztruk/eclipse-workspace/CucumberTutorial/src/main/java/features/tagging.feature");
formatter.feature({
  "line": 1,
  "name": "this is a test for tagging",
  "description": "",
  "id": "this-is-a-test-for-tagging",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "login incorrectly",
  "description": "",
  "id": "this-is-a-test-for-tagging;login-incorrectly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "invalid login",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "create account correctly",
  "description": "",
  "id": "this-is-a-test-for-tagging;create-account-correctly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "valid create account",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.valid_create_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "create account incorrectly",
  "description": "",
  "id": "this-is-a-test-for-tagging;create-account-incorrectly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "invalid create account",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.invalid_create_account()"
});
formatter.result({
  "status": "skipped"
});
});