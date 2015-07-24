<?php


error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);


set_include_path("." . PATH_SEPARATOR . ($UserDir = dirname($_SERVER['DOCUMENT_ROOT'])) . "/pear/php" . PATH_SEPARATOR . get_include_path());

$path = '/home/oncase/pear/share/pear';
set_include_path(get_include_path() . PATH_SEPARATOR . $path);

require_once "../../../Mail/Mail.php";


$host = "ssl://mail.oncase.com.br";
$username = "no-reply@oncase.com.br";
$password = "Oncase12";
$port = "465";
$to = "marcello@oncase.com.br";
$email_from = "no-reply@oncase.com.br";
$email_subject = "Contato atraves do site" ;
$email_body = "Oi, Marcello, tudo bem?" ;
$email_address = "balaum@gmail.com";


$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
        echo("<p>" . $mail->getMessage() . "</p>");
} else {
        echo("<p>Message successfully sent!</p>");
}

?>
