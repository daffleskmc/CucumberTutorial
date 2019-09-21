package stepDefinition.freeCrm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FreeCRMContactsStepDefinition {

	WebDriver driver;

	@Given("^user is in FreeCRM login page$")
	public void user_is_already_in_FreeCRM_login_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
	}

	@When("^user now enters \"(.*)\" and \"(.*)\"$")
	public void user_now_enters_and(String username, String password) {
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.xpath("//div[text()='Login']")).click();

	}

	@Then("^user to click contacts menu$")
	public void user_to_click_contacts_menu() {
		driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/a[3]")).click();
	}

	@Then("^user to add new contacts$")
	public void user_to_add_new_contacts() {
		driver.findElement(By.xpath("//button[@class='ui basic icon button']"));

	}

}
