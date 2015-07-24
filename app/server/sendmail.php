<?php


error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);


set_include_path("." . PATH_SEPARATOR . ($UserDir = dirname($_SERVER['DOCUMENT_ROOT'])) . "/pear/php" . PATH_SEPARATOR . get_include_path());

$path = '/home/oncase/pear/share/pear';
set_include_path(get_include_path() . PATH_SEPARATOR . $path);

require_once "../../../Mail/Mail.php";

$dataJS = json_decode(file_get_contents("php://input"));

$host = "ssl://mail.oncase.com.br";
$username = "no-reply@oncase.com.br";
$password = "Oncase12";
$port = "465";
$to = "marcello@oncase.com.br";
$email_from = "no-reply@oncase.com.br";
$email_subject = "Contato atraves do site" ;
$email_body = "Contato atraves do website";
$email_address = "balaum@gmail.com";

$name = $dataJS->name;
$email = $_POST["email"];
$tel = $_POST["tel"];
$msg = nl2br($_POST["msg"]);

$email_body .= "<style type=\"text/css\">  .oncase-email{ font-size:22px; font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: 300; }</style>";
$email_body .= "<p class='oncase-email'><br /><hr /><br />";
$email_body .= "<br /><strong>Nome:</strong> ".name;
$email_body .= "<br /><strong>email:</strong> ".email ;
$email_body .= "<br /><strong>tel:</strong> ".tel;
$email_body .= "<br /><strong>msg:</strong> <br />".msg;
$email_body .= "</p>";

$headers = array ('MIME-Version' => '1.0','Content-Type' => "text/html; charset=UTF-8",'From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
        echo("0");
} else {
        echo("1");
}

?>
