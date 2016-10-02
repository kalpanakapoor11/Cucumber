$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BackofficeLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of WBU backoffice home page",
  "description": "In order to validage home page\r\nas a backoffice user\r\nI navigate to ec2-52-88-243-186.us-west-2.compute.amazonaws.com/admin",
  "id": "validation-of-wbu-backoffice-home-page",
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
  "name": "In order to validate wbu home page and login function",
  "description": "",
  "id": "validation-of-wbu-backoffice-home-page;in-order-to-validate-wbu-home-page-and-login-function",
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
  "name": "I entered \"\u003cusername\u003e\" as username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"\u003cpassword\u003e\" as password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validation-of-wbu-backoffice-home-page;in-order-to-validate-wbu-home-page-and-login-function;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "logintype"
      ],
      "line": 15,
      "id": "validation-of-wbu-backoffice-home-page;in-order-to-validate-wbu-home-page-and-login-function;;1"
    },
    {
      "cells": [
        "300_hqadmin",
        "wbu@1234",
        "should"
      ],
      "line": 16,
      "id": "validation-of-wbu-backoffice-home-page;in-order-to-validate-wbu-home-page-and-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8130902046,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "In order to validate wbu home page and login function",
  "description": "",
  "id": "validation-of-wbu-backoffice-home-page;in-order-to-validate-wbu-home-page-and-login-function;;2",
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
  "name": "I entered \"300_hqadmin\" as username",
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
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "BackofficeLogin.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 144087189,
  "status": "passed"
});
formatter.match({
  "location": "BackofficeLogin.i_get_the_Title_of_the_page()"
});
formatter.result({
  "duration": 41751401,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1181105617,
  "status": "passed"
});
});