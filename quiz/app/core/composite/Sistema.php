<?php
/**
 * Description of Sistema
 *
 * @author fabiomaciel
 */

class Sistema {     
    
    public function getIp() {

        if (!empty($_SERVER['REMOTE_ADDR'])) {
            $ip = $_SERVER['REMOTE_ADDR'];
        } elseif(!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif ( !empty($_SERVER['HTTP_X_FORWARDED_FOR']) ){
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } elseif ( !empty($_SERVER['HTTP_X_FORWARDED']) ) {
            $ip = $_SERVER['HTTP_X_FORWARDED'];
        } elseif ( !empty($_SERVER['HTTP_FORWARDED']) ) {
            $ip = $_SERVER['HTTP_FORWARDED'];
        } elseif ( !empty($_SERVER['HTTP_X_COMING_FROM']) ) {
            $ip = $_SERVER['HTTP_X_COMING_FROM'];
        } elseif ( !empty($_SERVER['HTTP_COMING_FROM']) ) {
            $ip = $_SERVER['HTTP_COMING_FROM'];
        } else {
            $ip = NULL;
        }
        return $ip;
    }
    
    
    /*
     * Função para transformar valor real para o formanto do bando de dados mysql
     */
    public function formatNumber($number) {            
        return str_replace(",",".",str_replace(".","",trim($number)));		
    }
    
    /*
     * Função para transformar uma data brasil para o formanto do bando de dados mysql
     */
    public function formatDate($data) {
        return substr($data,6,4)."-".substr($data,3,2)."-".substr($data,0,2);
    }
                
    /*
     * Retira código maliciosos
     */
    public function str($str){
        $badword = array("select","insert","update","delete","drop","destroy","'","´","`","¨","*");
        for ($i=0;$i<sizeof($badword);$i++){
            $str = str_replace($badword[$i],"",$str);
        }	    
        return addslashes(trim($str));		
    }
	
    /*
     * Retorna o mês por extenso. 
     */
    public function getMes($mes=null) {
        $mes = $mes != null ? $mes : date('n');
        
        switch ($mes){
            case 1: return "Janeiro"; break;
            case 2: return "Fevereiro"; break;
            case 3: return "Março"; break;
            case 4: return "Abril"; break;
            case 5: return "Maio"; break;
            case 6: return "Junho"; break;
            case 7: return "Julho"; break;
            case 8: return "Agosto"; break;
            case 9: return "Setembro"; break;
            case 10: return "Outubro"; break;
            case 11: return "Novembro"; break;
            case 12: return "Dezembro"; break;
        }
    }
    
    /*
     * Retorna a semana por extenso
     */
    public function getSemana($semana=null) {
        $semana = $semana != null ? $semana : date('w');
        
        switch ($semana) {
            case 0: return "Domingo"; break;
            case 1: return "Segunda-feira"; break;
            case 2: return "Terça-feira"; break;
            case 3: return "Quarta-feira"; break;
            case 4: return "Quinta-feira"; break;
            case 5: return "Sexta-feira"; break;
            case 6: return "Sábado"; break;
        }
    }
    
    public function alert($txt) { 
        echo '<script>alert("'.$txt.'");</script>'; 
    }   
    
    public function redireciona($link) { 
        echo '<script>location.href = "'.$link.'";</script>'; 
    }
    
    public function upper($str){ 
        return mb_strtoupper($str, 'UTF-8'); 
    }  
    
    public function getMd5() { 
        return md5("gorvf1dbme8ylxk6n37icqhpts2a54uzwj09".rand(1000000000,9999999999).date('YmdHis')."imperio").md5("gorvf1dbme8ylxk6n37icqhpts2a54uzwj09".rand(1000000000,9999999999).date('YmdHis')."imperio"); 
    }     
    
    public function getExtensao($str) { 
        $array = explode(".", $str);
        return is_array($array) ? strtolower(end($array)) : 'erro';
    }
    
    public function primeiroNome($str) {    
        $complemento = '';
        $primeiroNome = explode(" ", $str);
        
        if(strlen($primeiroNome[0]) <= 2) {
            $complemento = isset($primeiroNome[1]) ? $primeiroNome[1] : '';
        }
        
        return $primeiroNome[0].' '.$complemento;
    }
    
    /*
     * Recebe a URL e parametros quando necessário e retorna
     */
    public function curl($url,$param=null) { 
        $ch = curl_init($url);            
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $param);	
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch); 
        curl_close($ch);
        return $result;
    }
       
}
?>
