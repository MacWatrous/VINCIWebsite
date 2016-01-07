<?php
//Get the email from POST
$email = $_REQUEST['email'];
$file = fopen("subscribe.txt","a+");
fwrite($file,$email);
print_r(error_get_last());

//redirect
header("Location: http://www.example.com/");