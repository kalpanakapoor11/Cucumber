$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ForgotPassword.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of WBU app Forgot Password Page",
  "description": "In order to validage \"Forgot Password\"\r\nas a app user\r\nI navigate to http://qa_order.wbu.com/store/indianapolis",
  "id": "validation-of-wbu-app-forgot-password-page",
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
  "name": "In order to validate wbu app Forgot Password function",
  "description": "",
  "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function",
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
  "name": "I click on forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I provide \"\u003cEmailID\u003e\" as user emailID",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on reset password button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;",
  "rows": [
    {
      "cells": [
        "EmailID"
      ],
      "line": 14,
      "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;;1"
    },
    {
      "cells": [
        "kkapoo@dminc.com"
      ],
      "line": 15,
      "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;;2"
    },
    {
      "cells": [
        "kkapoo@dminc.in"
      ],
      "line": 16,
      "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "In order to validate wbu app Forgot Password function",
  "description": "",
  "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;;2",
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
  "name": "I click on forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I provide \"kkapoo@dminc.com\" as user emailID",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on reset password button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 7432470033,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPassword.i_click_on_forgot_password_link()"
});
formatter.result({
  "duration": 82690842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kkapoo@dminc.com",
      "offset": 11
    }
  ],
  "location": "ForgotPassword.i_provide_as_user_emailID(String)"
});
formatter.result({
  "duration": 130316710,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPassword.i_click_on_reset_password_button()"
});
formatter.result({
  "duration": 111004172,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "In order to validate wbu app Forgot Password function",
  "description": "",
  "id": "validation-of-wbu-app-forgot-password-page;in-order-to-validate-wbu-app-forgot-password-function;;3",
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
  "name": "I click on forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I provide \"kkapoo@dminc.in\" as user emailID",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on reset password button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 403977087,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPassword.i_click_on_forgot_password_link()"
});
formatter.result({
  "duration": 118554051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kkapoo@dminc.in",
      "offset": 11
    }
  ],
  "location": "ForgotPassword.i_provide_as_user_emailID(String)"
});
formatter.result({
  "duration": 145012918,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPassword.i_click_on_reset_password_button()"
});
formatter.result({
  "duration": 79150800,
  "status": "passed"
});
formatter.uri("Register.feature");
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
  "name": "I entered \"\u003cusername\u003e\" as username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I entered \"\u003ccpassword\u003e\" as confirmed password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered \"\u003cphone\u003e\" as phone number",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Navigate to login page",
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
        "cpassword",
        "phone"
      ],
      "line": 19,
      "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;1"
    },
    {
      "cells": [
        "abc5@dminc.com",
        "testing1#",
        "testing1#",
        "9876543456"
      ],
      "line": 20,
      "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;2"
    },
    {
      "cells": [
        "kkapoor@dminc.com",
        "testing1#",
        "testing1#",
        "9876543456"
      ],
      "line": 21,
      "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;3"
    }
  ],
  "keyword": "Examples"
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
  "name": "I entered \"abc5@dminc.com\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"testing1#\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I entered \"testing1#\" as confirmed password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered \"9876543456\" as phone number",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 345672781,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_click_on_register_button()"
});
formatter.result({
  "duration": 105560216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc5@dminc.com",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_username(String)"
});
formatter.result({
  "duration": 152701357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as__password(String)"
});
formatter.result({
  "duration": 119187134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_confirmed_password(String)"
});
formatter.result({
  "duration": 94295813,
  "status": "passed"
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
  "duration": 96230053,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_click_on_submit_button()"
});
formatter.result({
  "duration": 69213680,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_validate_the_message()"
});
formatter.result({
  "duration": 37322,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_Navigate_to_login_page()"
});
formatter.result({
  "duration": 66323517,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to validate wbu app signup function",
  "description": "",
  "id": "validation-of-wbu-app-signup;in-order-to-validate-wbu-app-signup-function;;3",
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
  "name": "I entered \"kkapoor@dminc.com\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"testing1#\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I entered \"testing1#\" as confirmed password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered \"9876543456\" as phone number",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 397126072,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_click_on_register_button()"
});
formatter.result({
  "duration": 114304882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kkapoor@dminc.com",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_username(String)"
});
formatter.result({
  "duration": 135135513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as__password(String)"
});
formatter.result({
  "duration": 108059891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "SignUp.i_entered_as_confirmed_password(String)"
});
formatter.result({
  "duration": 90264047,
  "status": "passed"
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
  "duration": 86782323,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_click_on_submit_button()"
});
formatter.result({
  "duration": 60559988,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_validate_the_message()"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_Navigate_to_login_page()"
});
formatter.result({
  "duration": 58792765,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of WBU app login",
  "description": "In order to validage login\r\nas a app user\r\nI navigate to http://qa_order.wbu.com/store/indianapolis",
  "id": "validation-of-wbu-app-login",
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
  "name": "In order to validate wbu app login function",
  "description": "",
  "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function",
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
  "name": "I entered \"\u003cEmail\u003e\" as Email",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"\u003cpass\u003e\" as pass",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;",
  "rows": [
    {
      "cells": [
        "Email",
        "pass"
      ],
      "line": 17,
      "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;;1"
    },
    {
      "cells": [
        "kkapoor@dminc.com",
        "testing1#"
      ],
      "line": 18,
      "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;;2"
    },
    {
      "cells": [
        "avasim@dminc.com",
        "testing1#"
      ],
      "line": 19,
      "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "In order to validate wbu app login function",
  "description": "",
  "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;;2",
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
  "name": "I entered \"kkapoor@dminc.com\" as Email",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"testing1#\" as pass",
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
formatter.step({
  "line": 13,
  "name": "I logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 392305869,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_get_the_Title_of_the_page()"
});
formatter.result({
  "duration": 43576374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kkapoor@dminc.com",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_as_Email(String)"
});
formatter.result({
  "duration": 103721148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_as_pass(String)"
});
formatter.result({
  "duration": 137184986,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 81601024,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_logout()"
});
formatter.result({
  "duration": 948784638,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "In order to validate wbu app login function",
  "description": "",
  "id": "validation-of-wbu-app-login;in-order-to-validate-wbu-app-login-function;;3",
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
  "name": "I entered \"avasim@dminc.com\" as Email",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I entered \"testing1#\" as pass",
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
formatter.step({
  "line": 13,
  "name": "I logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.i_am_on_the_homepage_of_wbu_website()"
});
formatter.result({
  "duration": 399621083,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_get_the_Title_of_the_page()"
});
formatter.result({
  "duration": 10812801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avasim@dminc.com",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_as_Email(String)"
});
formatter.result({
  "duration": 87802627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing1#",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_as_pass(String)"
});
formatter.result({
  "duration": 102410195,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 83535731,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_logout()"
});
formatter.result({
  "duration": 970334195,
  "status": "passed"
});
});