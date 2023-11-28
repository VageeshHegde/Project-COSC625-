<?php
require_once "google-api/vendor/autoload.php";
$gClient = new Google_Client();
$gClient->setClientId("525234404672-bu5e6udss2logr7kor05961lhtp245uv.apps.googleusercontent.com");
$gClient->setClientSecret("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");
$gClient->setApplicationName("Vicode Media Login");
$gClient->setRedirectUri("http://localhost/login-with-google/controller.php");
$gClient->addScope("https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email");

// login URL
$login_url = $gClient->createAuthUrl();
?>