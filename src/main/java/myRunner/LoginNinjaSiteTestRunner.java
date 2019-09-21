package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\indeztruk\\eclipse-workspace\\CucumberTutorial\\src\\main\\java\\features\\loginNinjaSite.feature", glue = {
		"stepDefinition.ninjaSite" }, format = { "pretty", "html:test-output", "json:json-output/cucumber.json",
				"junit:junit-output/cucumber.xml" }, monochrome = true, strict = true, dryRun = false)

public class LoginNinjaSiteTestRunner {

}
