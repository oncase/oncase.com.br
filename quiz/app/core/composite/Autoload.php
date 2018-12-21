<?php

spl_autoload_register(function($class_name){

	$file = $class_name . ".php";
	$dir_dao = (stristr($class_name, "DAO"))? strtolower(str_replace('DAO', "", $class_name)) : "";

	$array_dependencias = [
		'Routing' 				=> 'app/core/composite', 
		'Config' 				=> 'config',
		'Constant'              => 'app/config',
		'Component' 			=> 'app/core/composite',
		'Standard' 				=> 'app/core/composite',
		'Controller' 			=> 'app/controller', 
		'View' 					=> 'app/view', 
		'Entity'				=> 'app/model/entity', 
		'Model' 				=> "app/model/tomodel",
		'DAO' 					=> "app/model/{$dir_dao}",
		'Class'					=>'app/common/public_class',
		'Trait'					=>'app/common/public_trait',
		'Connection' 			=> 'app/core/communicate',
		'Sistema' 			    => 'app/core/composite',
        'Debug'					=>'app/common/public_trait',
	];

    $array_modelos = [
        'Administrador'         =>'app/model/administrador',
    ];


	//dependencias
	foreach ($array_dependencias as $class =>$path) {
		if(stristr($class_name, $class)){
			require_once("$path/$file");
			break;		
		}		
	}

	//modelos
    foreach ($array_modelos as $class =>$path) {
        if($class_name == $class){
            require_once("$path/$file");
            break;
        }
    }

} );
