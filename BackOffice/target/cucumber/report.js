$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of WBU app signup",
  "description": "In order to validage signup\r\nas a app user\r\nI navigate to http://qa_order.wbu.com/store/indianapolis",
  "id": "validation-of-wbu-app-signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "In order to validate wbu app signup function",
  "description": "",
  "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage of wbu website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I entered \"\u003cusername\u003e\" as email",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I entered \"\u003cpassword\u003e\" as confirmed password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered \"\u003cphone\u003e\" as phone number",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "phone"
      ],
      "line": 19,
      "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;1"
    },
    {
      "cells": [
        "abc5@dminc.com",
        "wbu@1234",
        "9876543456"
      ],
      "line": 20,
      "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 267370134,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "In order to validate wbu app signup function",
  "description": "",
  "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage of wbu website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I entered \"abc5@dminc.com\" as email",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"wbu@1234\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I entered \"wbu@1234\" as confirmed password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered \"9876543456\" as phone number",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 116668331,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_click_on_register_button1()"
});
formatter.result({
  "duration": 64381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc5@dminc.com",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_email(String)"
});
formatter.result({
  "duration": 3303976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wbu@1234",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_as_password(String)"
});
formatter.result({
  "duration": 451603,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tdriver cannot be resolved to a variable\n\tOR cannot be resolved\n\tdriver cannot be resolved\n\tOR cannot be resolved\n\r\n\tat com.wbu.bo.stepDefinition.Login.i_entered_as_password(Login.java:44)\r\n\tat ✽.And I entered \"wbu@1234\" as password(Register.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "wbu@1234",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_confirmed_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543456",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp.i_click_on_register_button1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp.i_validate_the_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1593672,
  "error_message": "java.lang.NullPointerException\r\n\tat com.wbu.bo.stepDefinition.Hooks.embedScreenshot(Hooks.java:80)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});