<?php
class Routing{
	private $_listUrl = array(); // todas as url de paramento
	private $_trim = '/\^$'; 
	private $existURL = false;

	function __construct($array_navegation){
		self::add($array_navegation);
		self::execute($array_navegation);
	}

	public function add($array_navegation){		
		//criando array de url
		foreach ($array_navegation as $key => $value) {
			$this->_listUrl[] = trim($value['url'], $this->_trim); //  funcao vai retirar os caracteres especificado
		}	
	}

	public function execute($array_navegation){			
		try {
			$url = isset($_REQUEST['uri']) ? $_REQUEST['uri'] : '/';
			$url = trim($url, $this->_trim);	
			$bar_count_uri = substr_count($url, '/');

				foreach ($this->_listUrl as $listKey => $listUrl){
					//Validar se url digitada existe e deverá possui somente controller, ação e paramentro, ou seja, apenas 2 barras. 	
					if (preg_match("#^$listUrl$#", $url) && $bar_count_uri <= 2){						 
						
					//substr — Retorna uma parte de uma string
					//strrchr — Encontra a ultima ocorrência de um caractere em uma string
					//funcao abaixo está recebendo paramentro após a barra. Usado para passar id, etc.						
					$after_bar = substr(strrchr($url, "/"), 1);		

						$this->existURL=true;													 
						$_controller = $array_navegation[$listKey]['controller'];
						$_action = $array_navegation[$listKey]['action'];
						$object = new $_controller;
						$object->$_action($after_bar);
					}
				}
				//if($this->existURL==false)throw new Excecao();
		} catch (Excecao $excecaoController) {
			//$excecaoController::existe_url();
		}
	}
}
?>
