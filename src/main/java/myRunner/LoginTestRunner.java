package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\indeztruk\\eclipse-workspace\\CucumberTutorial\\src\\main\\java\\features\\login.feature", glue = {
		"stepDefinition" }, format = { "pretty", "html:test-output" })

public class LoginTestRunner {

}
