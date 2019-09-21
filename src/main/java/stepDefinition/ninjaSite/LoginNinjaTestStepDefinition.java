package stepDefinition.ninjaSite;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginNinjaTestStepDefinition {

	WebDriver driver;

	@Given("^user is in main page$")
	public void user_is_in_main_page() throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://tutorialsninja.com/demo/index.php?route=account/login");
	}

	@When("^user sees login button$")
	public void user_sees_login_button() throws Throwable {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		Assert.assertTrue(loginBtn.isDisplayed());

	}

	@Then("^user enters email and password$")
	public void user_enters_email_and_password(DataTable dataTable) throws Throwable {
		// List<List<String>> accountValues = dataTable.raw();
		// driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(accountValues.get(0).get(0));
		// driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys(accountValues.get(0).get(1));

		for (Map<String, String> accountValues : dataTable.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(accountValues.get("email"));
			driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys(accountValues.get("password"));
		}

	}

	@Then("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^user is now in home page$")
	public void user_is_now_in_home_page() throws Throwable {
		Assert.assertTrue(driver.findElement(By.xpath("//a[text()='Account']")).isDisplayed());
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
	}

}
