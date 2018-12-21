<?php

trait Standard
{

    public $form;

    public function view($file_page)
    {
        try {
            if (!file_exists("app/view/". $file_page . ".php")) throw new Exception("Arquivo Inexistente", 1);
            require_once("app/view/". $file_page . ".php");
        } catch (Exception $e) {
            $this->loadMessage($e->getMessage());
            $this->redirect(array('controller' => 'dashboard', 'action' => 'index'));
        }
    }

    public function assets($file)
    {
        echo URL . "app/public/" . $file;
    }
    
    public function instance($class)
    {
        return new $class;
    }

    public function request()
    {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            return true;
        } else {
            return false;
        }
    }

    public function post($posicao = "")
    {
        if (!empty($_POST)) {
            if (!empty($posicao)) {
                if (isset($_POST[$posicao])) {
                    return $_POST[$posicao];
                } else {
                    return "";
                }
            } else {
                return $_POST;
            }
        } else {
            return "";
        }
    }

    public function redirect($seta)
    {
        $url = URL . $seta;
        header("location: $url");
        exit;
    }


    public function headerInc()
    {
        require_once(self::DEFAULT_VIEW . "headerfooter/header.php");
    }

    public function footerInc()
    {
        require_once(self::DEFAULT_VIEW . "headerfooter/footer.php");
    }

    public function jscript($file_js)
    {
        echo "<script type='text/javascript' src='" . self::JS . $file_js . ".js'></script>";
    }

    public function dataBrasil($data)
    {
        $dataArray = array_reverse(explode('-', $data));
        $dataAmericana = implode('/', $dataArray);
        return $dataAmericana;
    }

    public function dataAmerica($data)
    {
        $dataArray = array_reverse(explode('/', $data));
        $dataAmericana = implode('-', $dataArray);
        return $dataAmericana;
    }



}

?>
