<?php

class PrincipalController extends Component
{
    public $data = null;
    public $resultado = null;
    public $error = null;
    public $redirect = null;
    public $msg = null;

    function __construct(){
        session_set_cookie_params (0, '/');
        session_name('AgenciaResulttado');
        session_start();
        date_default_timezone_set("America/Recife");
        ini_set('display_errors', '1');
    }

    public function index(){
        $this->view("principal/index");
    }


    public function congratulations(){
        if($this->post()){
            //print_r($this->post());
            $total=0;
            for ($counter=1; $counter<=12; $counter++) {
                $resposta=$this->post()["quest"][$counter];
                $total=$total+$resposta;
            }
            $resultado = $total;
            
        }else{
            $resultado = 0;
        }


        if($resultado >= 0  && $resultado <= 19){
            $this->title = 'Data-resistant - Cético';
            $this->msg = 'A sua organização ainda trabalha guiada por modelos antigos. Decisões baseadas na opinião do gestor sobre o mercado e processos estruturados em planilhas fazem parte do seu cotidiano. Ser resistente ao uso de dados enquanto as empresas do seu setor estão lutando para se adaptar, buscando possibilidades de inovação, amparadas pelo uso dos dados pode não ser o caminho certo a seguir. Considere buscar conhecimento sobre como a transformação digital está impactando diretamente no mundo dos negócios.';
            $this->link = 'http://blog.oncase.com.br/transformacao-digital/';

        }else if($resultado >= 20  && $resultado <= 119){
            $this->title = 'Data-aware - Curioso';
            $this->msg = 'A sua empresa reconhece a importância do uso dos dados, entretanto, não começou a agir efetivamente para utilizá-los como vantagem competitiva. Empresas como a sua concentram-se em coletar dados e, muitas vezes, tomam conhecimento do valor potencial das informações através de sistemas como análise de mídia social e até ferramentas de automação de CRM de Vendas e ERP. / força de vendas Sistemas ERP. A dica aqui é você se perguntar o que há nos dados? Que vantagens isso poderia ter? A transição do reconhecimento de dados para o guiado por dados vem do desejo de desvendar o valor dos dados que sua empresa reuniu. Confira este artigo e saiba mais sobre empresas data-driven.';
            $this->link = 'http://blog.oncase.com.br/empresa-data-driven/';
            
        }else if($resultado >= 120  && $resultado <= 179){
            $this->title = 'Data-guided - Guiado';
            $this->msg = 'A empresa está no caminho certo, provavelmente vocês trabalham para extrair algum tipo de valor dos dados coletados. Organizações como a sua concentram-se na análise do que aconteceu. Nas reuniões, perguntas como "O que os dados nos dizem? O que ocorreu? são comuns. Neste estágio, a sua empresa provavelmente está testando várias ferramentas e começando a compreender o valor tático da análise de dados: "Não vamos fazer isso de novo" e "Vamos fazer mais disso" são palavras de ordem. Uma questão que gostaríamos de alertar é que a maioria das empresas ficam "presas" neste estágio por anos. A transição só ocorre quando as ferramentas utilizadas começam a ficar ultrapassadas e o investimento começa a pesar no bolso. A Oncase pode te ajudar a entender as ações que a sua empresa pode tomar daqui em diante.';
            $this->link = 'https://www.oncase.com.br/solucoes/oncase-labs';
        
        }else if($resultado >= 180  && $resultado <= 219){
            $this->title = 'Data-savvy - Expert';
            $this->msg = 'Empresas como a sua percebem que o valor dos dados não é apenas tático. Os dados podem ser um ativo estratégico e trazer vantagem competitiva para a sua organização. Para desenvolver cada vez mais esse valor estratégico, uma empresa com conhecimento de dados concentra os seus esforços no porquê, afim de gerar mais insights. Por que as vendas caíram tanto no último semestre? Por que os consumidores compram menos o produto X? Por que a geração de leads sempre aumenta na segunda semana do mês? Por que o X funcionou, mas o Y não? Olhar para dentro para gerar insights faz parte do cotidiano do seu negócio. Algumas empresas neste estágio conseguem também utilizar os dados externos como base para a tomada de decisões ou para descobrir por que algo aconteceu. A transição para uma organização data-driven ocorre depois que você começa a desenvolver insights concretos sobre o que aconteceu e por quê. A Oncase pode te ajudar nesta jornada, o que acha de agendar uma reunião sem compromisso?';
            $this->link = 'https://www.oncase.com.br/solucoes/oncase-labs';
            
        }else if($resultado >= 220  && $resultado <= 240){
            $this->title = 'Data-driven';
            $this->msg = 'Empresas como a sua percebem que o valor dos dados não é apenas tático. Os dados podem ser um ativo estratégico e trazer vantagem competitiva para a sua organização. Para desenvolver cada vez mais esse valor estratégico, uma empresa com conhecimento de dados concentra os seus esforços no porquê, afim de gerar mais insights. Por que as vendas caíram tanto no último semestre? Por que os consumidores compram menos o produto X? Por que a geração de leads sempre aumenta na segunda semana do mês? Por que o X funcionou, mas o Y não? Olhar para dentro para gerar insights faz parte do cotidiano do seu negócio. Algumas empresas neste estágio conseguem também utilizar os dados externos como base para a tomada de decisões ou para descobrir por que algo aconteceu. A transição para uma organização data-driven ocorre depois que você começa a desenvolver insights concretos sobre o que aconteceu e por quê. A Oncase pode te ajudar nesta jornada, o que acha de agendar uma reunião sem compromisso?';
            $this->link = 'https://oncase.com.br/contato';
        }

        $this->view("principal/congratulations");
    }
    
}

