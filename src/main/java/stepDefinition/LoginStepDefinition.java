package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^user is already in login page$")
	public void user_already_in_login_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	}

	@When("^the sign in button displays$")
	public void signin_btn_displays() {
		WebElement signinBtn = driver.findElement(By.xpath("//button[@id='SubmitLogin']"));
		Assert.assertTrue(signinBtn.isDisplayed());
	}

	@Then("^user enters email and password$")
	public void user_enters_email_and_password() {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("daffles4@gmail.com");
		driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys("123456");
	}

	@Then("^user clicks sign in button$")
	public void user_clicks_sign_in_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement signinBtn = driver.findElement(By.xpath("//button[@id='SubmitLogin']"));
		signinBtn.click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		// Write code here that turns the phrase above into concrete actions
		// WebElement myAccount = driver.findElement(By.xpath("//span[text()='My
		// account']"));
		// Assert.assertTrue(myAccount.isDisplayed());
		String title = driver.getTitle();
		System.out.println("Home page title is: " + title);
		Assert.assertEquals("My account - My Store", title);

		Actions hoverToDresses = new Actions(driver);
		WebElement dressesMenu = driver.findElement(By.xpath("(//a[@title='Dresses'])[2]"));
		hoverToDresses.moveToElement(dressesMenu).build().perform();
		System.out.println("Done Mouse hover on 'Dresses' from Menu");
		driver.findElement(By.xpath("(//a[@title='Summer Dresses'])[2]")).click();

	}

	// @Given("^user already in home page$")
	// public void user_already_in_home_page() {
	// String title = driver.getTitle();
	// System.out.println("Home page title is: " + title);
	// Assert.assertEquals("My account - My Store", title);
	// }

	// @Then("^user hovers dresses menu$")
	// public void user_hovers_dresses_menu() {
	//
	// }

	// @Then("^user selects summer dress sub menu$")
	// public void user_selects_summer_dress_sub_menu() {
	//
	// }

	@Then("^user hovers chiffon dress$")
	public void user_hovers_chiffon_dress() {
		Actions hoverToChiffonDress = new Actions(driver);
		hoverToChiffonDress
				.moveToElement(driver.findElement(
						By.xpath("//img[@title='Printed Chiffon Dress' and @alt='Printed Chiffon Dress']")))
				.build().perform();
	}

	@Then("^user adds to cart the chiffon dress$")
	public void user_adds_to_cart_the_chiffon_dress() {
		driver.findElement(
				By.xpath("//a[@data-id-product='7' and @title='Add to cart']//following::span[text()='Add to cart']"))
				.click();
	}

}
