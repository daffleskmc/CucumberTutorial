package stepDefinition.tagging;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;

public class TaggingStepDefinition {

	WebDriver driver;

	@Given("^valid login$")
	public void valid_login() throws Throwable {
		System.out.println("valid login");
	}

	@Given("^invalid login$")
	public void invalid_login() throws Throwable {
		System.out.println("invalid login");
	}

	@Given("^valid create account$")
	public void valid_create_account() throws Throwable {
		System.out.println("valid create account");
	}

	@Given("^invalid create account$")
	public void invalid_create_account() throws Throwable {
		System.out.println("invalid create account");
	}
}
