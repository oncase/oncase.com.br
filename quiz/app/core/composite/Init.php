<?php
require_once('Autoload.php');

//CONSTANTES DEFAULT
define("HOST", "{$_SERVER['HTTP_HOST']}");
define("DIRETORIO", "/quiz/");
define("URL", "http://" . HOST . DIRETORIO);

//criando array de urls.  padrão será: array(0=>array('url'=>'', 'controller'=>'', 'action'=>''));
$navegation = simplexml_load_file('app/config/navegation.xml');
foreach ($navegation as $route => $attributes) {
   $array_attributes_xml = (array)$attributes;   
   $array_navegation[] =  $array_attributes_xml['@attributes']; 
}

//instanciando classe de roteamento e controlador
new Routing($array_navegation);
