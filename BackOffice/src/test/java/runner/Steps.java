package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, glue = { "Steps" }, monochrome = true, tags = {
		}, plugin = { "pretty", "html:target/cucumber" })
public class Steps {

}
