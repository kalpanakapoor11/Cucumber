package Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/Features"},
glue={"Steps"},
monochrome=true,
tags={"@smoke"},
plugin={"pretty","html:target/cucumber"})
public class RunCuke {

}
