<?php

class Connection{
  private $host;  
  private $user;
  private $password;
  private $dbname;
  private $type;
  private $connect; 
  private $conn;

  function __construct(){
    $data_base = parse_ini_file('app/config/database.ini', true);
    $this->validate_ambient($data_base);
  }

  //faz validacao se esta em abmiente de desenvolvimento ou producao
  public function validate_ambient($data_base){   
      if(HOST == "localhost"){
        $this->host = $data_base['desenvolvimento']['host'];
        $this->user = $data_base['desenvolvimento']['user'];
        $this->password = $data_base['desenvolvimento']['password'];
        $this->dbname = $data_base['desenvolvimento']['dbname'];
        $this->type = $data_base['desenvolvimento']['type'];         
      }else{
        $this->host = $data_base['producao']['host'];
        $this->user = $data_base['producao']['user'];
        $this->password = $data_base['producao']['password'];
        $this->dbname = $data_base['producao']['dbname'];
        $this->type = $data_base['producao']['type']; 
      }
  }

  public  function connect(){         
    try {
      $this->connect = new PDO("{$this->type}:host={$this->host};dbname={$this->dbname}; charset=UTF8",  $this->user, $this->password);      
      $this->conn = $this->connect;
      // é o modo de erro PDO para a exceção 
      $this->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $this->conn;
    } catch (PDOException $e) {     
      die(ExcecaoController::erro_conexao($e->getMessage()));
    }
  }
}
?>
