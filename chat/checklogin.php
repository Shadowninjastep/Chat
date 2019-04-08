<?php
$username = $_POST['username'];
$password = $_POST['password'];
if ($username == 'user' && $password == 'secret')
{
    session_start();
if (!isset($_SESSION['login']) || $_SESSION['login'] == ’’)
{
header ("Location: ./login.html");
}


$_SESSION['login'] = $username;
$goto = "Location: chat.html"; //This is our landing page
} else {
$_SESSION['login'] = '';
$ref = getenv("HTTP_REFERER"); //This is the referrer page -- the login form
$goto = "Location:" . $ref;
}
header($goto);

?>
