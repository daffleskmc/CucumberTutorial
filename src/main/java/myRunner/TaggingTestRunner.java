package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\indeztruk\\eclipse-workspace\\CucumberTutorial\\src\\main\\java\\features\\tagging.feature", glue = {
		"stepDefinition.tagging" }, format = { "pretty", "html:test-output", "json:json-output/cucumber.json",
				"junit:junit-output/junit.xml" }, monochrome = true, strict = true, dryRun = true, tags = "~@SmokeTest")

public class TaggingTestRunner {

}
