$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BackofficeLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of WBU backoffice login page",
  "description": "In order to validage login page\r\nas a backoffice user\r\nI navigate to ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin",
  "id": "validation-of-wbu-backoffice-login-page",
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
  "name": "In order to verify login to wbu.com",
  "description": "",
  "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com",
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
  "name": "I get the Title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user \"\u003clogintype\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "logintype"
      ],
      "line": 15,
      "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com;;1"
    },
    {
      "cells": [
        "300_hqadmin",
        "wbu@1234",
        "should"
      ],
      "line": 16,
      "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10860450773,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "In order to verify login to wbu.com",
  "description": "",
  "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com;;2",
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
  "name": "I get the Title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"300_hqadmin\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"wbu@1234\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user \"should\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackofficeLogin.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 4142674062,
  "status": "passed"
});
formatter.match({
  "location": "BackofficeLogin.i_get_the_Title_of_the_page()"
});
formatter.result({
  "duration": 337769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300_hqadmin",
      "offset": 14
    }
  ],
  "location": "BackofficeLogin.user_entered_username(String)"
});
formatter.result({
  "duration": 200500309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wbu@1234",
      "offset": 14
    }
  ],
  "location": "BackofficeLogin.user_entered_password(String)"
});
formatter.result({
  "duration": 15222786104,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.13 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:32:46\u0027\nSystem info: host: \u0027DMIL0154\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\User1\\AppData\\Local\\Temp\\scoped_dir9456_6560}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 90bf04d535667228d2e78fc78b6a2d61\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:122)\r\n\tat Steps.BackofficeLogin.user_entered_password(BackofficeLogin.java:101)\r\n\tat ✽.Then user entered \"wbu@1234\" password(BackofficeLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "BackofficeLogin.user_successfully_logged_in(String)"
});
formatter.result({
  "status": "skipped"
});
});