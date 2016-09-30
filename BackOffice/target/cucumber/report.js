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
formatter.before({
  "duration": 8091401665,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "In order to verify login to wbu.com",
  "description": "",
  "id": "validation-of-wbu-backoffice-login-page;in-order-to-verify-login-to-wbu.com",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user entered \"username\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"password\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user \"logintype\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "BackofficeLogin.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 185721957,
  "status": "passed"
});
formatter.match({
  "location": "BackofficeLogin.i_get_the_Title_of_the_page()"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 14
    }
  ],
  "location": "BackofficeLogin.user_entered_username(String)"
});
formatter.result({
  "duration": 2403576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "BackofficeLogin.user_entered_password(String)"
});
formatter.result({
  "duration": 60182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logintype",
      "offset": 6
    }
  ],
  "location": "BackofficeLogin.user_successfully_logged_in(String)"
});
formatter.result({
  "duration": 55517,
  "status": "passed"
});
formatter.after({
  "duration": 1297595537,
  "status": "passed"
});
});