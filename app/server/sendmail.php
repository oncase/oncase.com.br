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
$email_body = "Contato atraves do website";
$email_address = "balaum@gmail.com";

$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$msg = nl2br($_POST["msg"]);


$email_body .= ="<br /><hr /><br />";
$email_body .= "Nome: ".name;
$email_body .= "email: ".email ;
$email_body .= "tel: ".tel;
$email_body .= "msg: <br />".msg;


$headers = array ('MIME-Version' => '1.0\r\n','Content-Type' => "text/html; charset=UTF-8\r\n",'From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
        echo("0");
} else {
        echo("1");
}

?>
