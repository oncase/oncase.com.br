<html>
<head>
    <?php include_once(SELF::HEAD) ?>
</head>
<body>
    <?php include_once(SELF::HEADER); ?>
    <section class="banner banner-page-3">
        <div class="quiz-banner quiz-banner-page-3"></div>
    </section>
    <section class="questionario">
        <div class="progresso">
        </div>
        <form class="container" method="POST" action="<?php echo URL . "congratulations" ?>">
            <div id="row-1" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>1</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>A organização tem uma compreensão clara de como as novas tecnologias e tendências estão mudando seu ambiente competitivo?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="1" name="quest[1]" value="0" type="radio">
                                <input type="hidden" name="msg[1][0]" value="A empresa possui convicção de que consegue manter seus bons resultados sem o uso de novas tecnologias.">
                                <label>A empresa possui convicção de que consegue manter seus bons resultados sem o uso de novas tecnologias.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="1" name="quest[1]" value="5" type="radio">
                                <input type="hidden" name="msg[1][5]" value="A empresa compreende a necessidade de atualização, mas ainda não sabe como colocar isso em prática.">
                                <label>A empresa compreende a necessidade de atualização, mas ainda não sabe como colocar isso em prática.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="1" name="quest[1]" value="10" type="radio">
                                <input type="hidden" name="msg[1][10]" value="Existe uma grande preocupação com a atualização tecnológica e a organização passa por uma fase de transição.">
                                <label>Existe uma grande preocupação com a atualização tecnológica e a organização passa por uma fase de transição.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="1" name="quest[1]" value="15" type="radio">
                                <input type="hidden" name="msg[1][15]" value="A organização já começou a implementar transformações para adaptação às novas tendências.">
                                <label>A organização já começou a implementar transformações para adaptação às novas tendências.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="1" name="quest[1]" value="20" type="radio">
                                <input type="hidden" name="msg[1][20]" value=">A empresa possui domínio sobre novas tecnologias e modelo de negócios e está plenamente adaptada à transformação digital.">
                                <label>A empresa possui domínio sobre novas tecnologias e modelo de negócios e está plenamente adaptada à transformação digital.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-2" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>2</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>A sua empresa possui uma estratégia definida para incorporar a análise de dados em sua gestão?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="2" name="quest[2]" value="0" type="radio">
                                <input type="hidden" name="msg[2][0]" value=">Não existe uma estratégia definida.">
                                <label>Não existe uma estratégia definida.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="2" name="quest[2]" value="5" type="radio">
                                <input type="hidden" name="msg[2][5]" value=">Ainda não foi traçada uma estratégia, mas a empresa reconhece a necessidade de elaborá-la.">
                                <label>Ainda não foi traçada uma estratégia, mas a empresa reconhece a necessidade de elaborá-la.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="2" name="quest[2]" value="10" type="radio">
                                <input type="hidden" name="msg[2][10]" value="Existem movimentos para a definição de uma estratégia, mas esse planejamento ainda não foi aplicado na prática.">
                                <label>Existem movimentos para a definição de uma estratégia, mas esse planejamento ainda não foi aplicado na prática.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="2" name="quest[2]" value="15" type="radio">
                                <input type="hidden" name="msg[2][15]" value="Existe uma estratégia definida em funcionamento na empresa, ainda que incompleta.">
                                <label>Existe uma estratégia definida em funcionamento na empresa, ainda que incompleta.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="2" name="quest[2]" value="20" type="radio">
                                <input type="hidden" name="msg[2][20]" value="A estratégia funciona de forma plena e serve como suporte para todas as atividades da organização.">
                                <label>A estratégia funciona de forma plena e serve como suporte para todas as atividades da organização.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-3" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>3</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>A empresa possui uma equipe formada com o objetivo de aplicar as mudanças da transformação digital e extrair valor dos dados?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="3" name="quest[3]" value="0" type="radio">
                                <input type="hidden" name="msg[3][0]" value="Não existe uma equipe formada com esse objetivo.">
                                <label>Não existe uma equipe formada com esse objetivo.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="3" name="quest[3]" value="5" type="radio">
                                <input type="hidden" name="msg[3][5]" value="Ainda não existe uma equipe formada, mas a empresa planeja a estruturação de um time de profissionais com a capacidade de facilitar a implementação das novas tendências no universo de dados.">
                                <label>Ainda não existe uma equipe formada, mas a empresa planeja a estruturação de um time de profissionais com a capacidade de facilitar a implementação das novas tendências no universo de dados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="3" name="quest[3]" value="10" type="radio">
                                <input type="hidden" name="msg[3][10]" value="Já foi iniciado o processo de composição da equipe, mas os resultados ainda não aparecem na prática.">
                                <label>Já foi iniciado o processo de composição da equipe, mas os resultados ainda não aparecem na prática.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="3" name="quest[3]" value="15" type="radio">
                                <input type="hidden" name="msg[3][15]" value="Existe uma equipe trabalhando diariamente na implementação da transformação digital em toda a organização.">
                                <label>Existe uma equipe trabalhando diariamente na implementação da transformação digital em toda a organização.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="3" name="quest[3]" value="20" type="radio">
                                <input type="hidden" name="msg[3][20]" value="Todos os colaboradores da organização já incorporaram a nova cultura analítica e a empresa se encontra em etapa avançada no gerenciamento de dados.">
                                <label>Todos os colaboradores da organização já incorporaram a nova cultura analítica e a empresa se encontra em etapa avançada no gerenciamento de dados.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-4" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>4</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Qual é o nível de aplicação dos profissionais da empresa no gerenciamento de dados?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="4" name="quest[4]" value="0" type="radio">
                                <input type="hidden" name="msg[4][0]" value="A organização ainda não realiza suas análises com base na contagem dos resultados registrados.">
                                <label>A organização ainda não realiza suas análises com base na contagem dos resultados registrados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="4" name="quest[4]" value="5" type="radio">
                                <input type="hidden" name="msg[4][5]" value="Existe a preocupação com a análise dos resultados coletados para chegar a melhores conclusões e a empresa possui profissionais dedicados à analisar informações históricas.">
                                <label>Existe a preocupação com a análise dos resultados coletados para chegar a melhores conclusões e a empresa possui profissionais dedicados à analisar informações históricas.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="4" name="quest[4]" value="10" type="radio">
                                <input type="hidden" name="msg[4][10]" value="A empresa possui um cientista de dados solitário - que possui a função de realizar análises avançadas ainda em estágios de provas de conceitos.">
                                <label>A empresa possui um cientista de dados solitário - que possui a função de realizar análises avançadas ainda em estágios de provas de conceitos.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="4" name="quest[4]" value="15" type="radio">
                                <input type="hidden" name="msg[4][15]" value="A organização conta com um time de engenheiros de dados, estatísticos e cientistas de dados.">
                                <label>A organização conta com um time de engenheiros de dados, estatísticos e cientistas de dados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="4" name="quest[4]" value="20" type="radio">
                                <input type="hidden" name="msg[4][20]" value="A empresa possui Data Squads apoiados por um executivo de dados/analytics (CDO/CAO).">
                                <label>A empresa possui Data Squads apoiados por um executivo de dados/analytics (CDO/CAO).</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-5" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>5</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>A empresa possui processos para coleta e análise de dados estruturados?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="5" name="quest[5]" value="0" type="radio">
                                <input type="hidden" name="msg[5][0]" value="A empresa utiliza apenas processos manuais para trabalhar com os dados gerados durante as atividades.">
                                <label>A empresa utiliza apenas processos manuais para trabalhar com os dados gerados durante as atividades.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="5" name="quest[5]" value="5" type="radio">
                                <input type="hidden" name="msg[5][5]" value="Existem processos bem definidos, mas ainda baseados em práticas tradicionais e/ou waterfall - não ágil.">
                                <label>Existem processos bem definidos, mas ainda baseados em práticas tradicionais e/ou waterfall - não ágil.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="5" name="quest[5]" value="10" type="radio">
                                <input type="hidden" name="msg[5][10]" value="Os processos já estão definidos, mas a organização ainda enfrenta dificuldades em colocar suas estratégias de gerenciamento de dados em prática.">
                                <label>Os processos já estão definidos, mas a organização ainda enfrenta dificuldades em colocar suas estratégias de gerenciamento de dados em prática.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="5" name="quest[5]" value="15" type="radio">
                                <input type="hidden" name="msg[5][15]" value="A empresa possui processos bem definidos que produzem resultados satisfatórios, mas ainda não existe uma cultura consolidada em toda a organização.">
                                <label>A empresa possui processos bem definidos que produzem resultados satisfatórios, mas ainda não existe uma cultura consolidada em toda a organização.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="5" name="quest[5]" value="20" type="radio">
                                <input type="hidden" name="msg[5][20]" value="Os dados possuem um papel central na empresa e todos os processos são estruturados com base nas informações geradas.">
                                <label>Os dados possuem um papel central na empresa e todos os processos são estruturados com base nas informações geradas.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-6" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>6</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Como você descreveria os processos relacionados à gestão de dados na sua empresa?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="6" name="quest[6]" value="0" type="radio">
                                <input type="hidden" name="msg[6][0]" value="Os processos são mal definidos.">
                                <label>Os processos são mal definidos.
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="6" name="quest[6]" value="5" type="radio">
                                <input type="hidden" name="msg[6][5]" value="Existem processos bem definidos, mas ainda não estão atualizados às novas tendências.">
                                <label>Existem processos bem definidos, mas ainda não estão atualizados às novas tendências.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="6" name="quest[6]" value="10" type="radio">
                                <input type="hidden" name="msg[6][10]" value="Os processos de gestão de dados foram modernizados para acompanhar a transformação digital, mas a empresa ainda está em processo de adaptação.">
                                <label>Os processos de gestão de dados foram modernizados para acompanhar a transformação digital, mas a empresa ainda está em processo de adaptação.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="6" name="quest[6]" value="15" type="radio">
                                <input type="hidden" name="msg[6][15]" value="Existem iniciativas Agile para data discovery/oportunidades de negócio com analytics avançadas.">
                                <label>Existem iniciativas Agile para data discovery/oportunidades de negócio com analytics avançadas.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="6" name="quest[6]" value="20" type="radio">
                                <input type="hidden" name="msg[6][20]" value="A organização aplica agile e Lean Analytics com Data Operations automatizados.">
                                <label>A organização aplica agile e Lean Analytics com Data Operations automatizados.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-7" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>7</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Como é o processo de tomada de decisão na sua empresa?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="7" name="quest[7]" value="0" type="radio">
                                <input type="hidden" name="msg[7][0]" value="O processo de tomada de decisão é baseado apenas na experiência do gestor.">
                                <label>O processo de tomada de decisão é baseado apenas na experiência do gestor.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="7" name="quest[7]" value="5" type="radio">
                                <input type="hidden" name="msg[7][5]" value="As tomadas de decisão são feitas com base em relatórios operacionais e experimentações através de aplicações de provas conceito.">
                                <label>As tomadas de decisão são feitas com base em relatórios operacionais e experimentações através de aplicações de provas conceito.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="7" name="quest[7]" value="10" type="radio">
                                <input type="hidden" name="msg[7][10]" value="A tomada de decisão ocorre de forma departamental.">
                                <label>A tomada de decisão ocorre de forma departamental.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="7" name="quest[7]" value="15" type="radio">
                                <input type="hidden" name="msg[7][15]" value="O processo de tomada de decisão ocorre de forma integrada apenas nas decisões mais importantes.">
                                <label>O processo de tomada de decisão ocorre de forma integrada apenas nas decisões mais importantes.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="7" name="quest[7]" value="20" type="radio">
                                <input type="hidden" name="msg[7][20]" value="A tomada de decisão é imersa em todas as instâncias de negócios.">
                                <label>A tomada de decisão é imersa em todas as instâncias de negócios.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-8" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>8</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Qual é a importância dos dados no processo de tomada de decisão?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="8" name="quest[8]" value="0" type="radio">
                                <input type="hidden" name="msg[8][0]" value="Os dados têm papel secundário na tomada de decisão, pois a experiência do gestor possui prioridade.">
                                <label>Os dados têm papel secundário na tomada de decisão, pois a experiência do gestor possui prioridade.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="8" name="quest[8]" value="5" type="radio">
                                <input type="hidden" name="msg[8][5]" value="Os dados são levados em consideração na tomada de decisão.">
                                <label>Os dados são levados em consideração na tomada de decisão.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="8" name="quest[8]" value="10" type="radio">
                                <input type="hidden" name="msg[8][10]" value="A empresa possui a preocupação em reunir uma boa base de dados antes de tomar as suas decisões.">
                                <label>A empresa possui a preocupação em reunir uma boa base de dados antes de tomar as suas decisões.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="8" name="quest[8]" value="15" type="radio">
                                <input type="hidden" name="msg[8][15]" value="Grande parte das decisões são baseadas em dados, mas os processos ainda não estão inteiramente automatizados.">
                                <label>Grande parte das decisões são baseadas em dados, mas os processos ainda não estão inteiramente automatizados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="8" name="quest[8]" value="20" type="radio">
                                <input type="hidden" name="msg[8][20]" value="A orientação por dados faz parte da cultura empresarial e todas as decisões são tomadas com base em dados disponíveis, confiáveis e atualizados.">
                                <label>A orientação por dados faz parte da cultura empresarial e todas as decisões são tomadas com base em dados disponíveis, confiáveis e atualizados.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-9" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>9</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Como a sua empresa encara a importância de explorar novas ferramentas de análise de dados/analytics?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="9" name="quest[9]" value="0" type="radio">
                                <input type="hidden" name="msg[9][0]" value="A empresa utiliza algumas ferramentas analíticas, mas não existe uma preocupação em explorar novas soluções.">
                                <label>A empresa utiliza algumas ferramentas analíticas, mas não existe uma preocupação em explorar novas soluções.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="9" name="quest[9]" value="5" type="radio">
                                <input type="hidden" name="msg[9][5]" value="A organização reconhece a importância das ferramentas de analytics para maximizar seus resultados, mas ainda está em busca de soluções efetivas.">
                                <label>A organização reconhece a importância das ferramentas de analytics para maximizar seus resultados, mas ainda está em busca de soluções efetivas.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="9" name="quest[9]" value="10" type="radio">
                                <input type="hidden" name="msg[9][10]" value="Ferramentas analíticas modernas já estão presentes dentro do ambiente organizacional, mas ainda não foram incorporadas nas rotinas de todos os departamentos.">
                                <label>Ferramentas analíticas modernas já estão presentes dentro do ambiente organizacional, mas ainda não foram incorporadas nas rotinas de todos os departamentos.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="9" name="quest[9]" value="15" type="radio">
                                <input type="hidden" name="msg[9][15]" value="A gestão de dados é feita com base em ferramentas modernas e as estratégias traçadas colocam essas informações em um papel central.">
                                <label>A gestão de dados é feita com base em ferramentas modernas e as estratégias traçadas colocam essas informações em um papel central.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="9" name="quest[9]" value="20" type="radio">
                                <input type="hidden" name="msg[9][20]" value="A organização possui uma cultura data-driven e todos os processos são baseados ferramentas analíticas modernas.">
                                <label>A organização possui uma cultura data-driven e todos os processos são baseados ferramentas analíticas modernas.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-10" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>10</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Quais são as principais ferramentas utilizadas dentro da sua organização?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="10" name="quest[10]" value="0" type="radio">
                                <input type="hidden" name="msg[10][0]" value="Documentos e Planilhas (excel, open office).">
                                <label>Documentos e Planilhas (excel, open office).</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="10" name="quest[10]" value="5" type="radio">
                                <input type="hidden" name="msg[10][5]" value="Banco de dados relacionais proprietários (oracle), ferramentas de análise especializadas (google analytics).">
                                <label>Banco de dados relacionais proprietários (oracle), ferramentas de análise especializadas (google analytics).</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="10" name="quest[10]" value="10" type="radio">
                                <input type="hidden" name="msg[10][10]" value="Banco de dados analíticos/processamento em memória + Ferramentas de BI Self-service local (tableau, qlik, power bi).">
                                <label>Banco de dados analíticos/processamento em memória + Ferramentas de BI Self-service local (tableau, qlik, power bi).</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="10" name="quest[10]" value="15" type="radio">
                                <input type="hidden" name="msg[10][15]" value="Soluções analíticas/Dados escaláveis (local/nuvem).">
                                <label>Soluções analíticas/Dados escaláveis (local/nuvem).</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="10" name="quest[10]" value="20" type="radio">
                                <input type="hidden" name="msg[10][20]" value="Plataforma de Data Science (local/nuvem).">
                                <label>Plataforma de Data Science (local/nuvem).</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-11" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>11</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>Como a sua empresa acompanha suas métricas e indicadores?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="11" name="quest[11]" value="0" type="radio">
                                <input type="hidden" name="msg[11][0]" value="A empresa não possui processos definidos para acompanhamento de métricas e indicadores.">
                                <label>A empresa não possui processos definidos para acompanhamento de métricas e indicadores.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="11" name="quest[11]" value="5" type="radio">
                                <input type="hidden" name="msg[11][5]" value="Cada departamento possui ferramentas e processos internos para análise dos seus resultados.">
                                <label>Cada departamento possui ferramentas e processos internos para análise dos seus resultados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="11" name="quest[11]" value="10" type="radio">
                                <input type="hidden" name="msg[11][10]" value="São coletados e organizados relatórios estáticos para uma análise manual de toda a organização.">
                                <label>São coletados e organizados relatórios estáticos para uma análise manual de toda a organização.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="11" name="quest[11]" value="15" type="radio">
                                <input type="hidden" name="msg[11][15]" value="Existe um processo automatizado para coleta e análise das informações.">
                                <label>As informações relacionadas a métricas e indicadores estão sempre acessíveis e atualizadas para os usuários interessados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="11" name="quest[11]" value="20" type="radio">
                                <input type="hidden" name="msg[11][20]" value="São coletados e organizados relatórios estáticos para uma análise manual de toda a organização.">
                                <label>As informações relacionadas a métricas e indicadores estão sempre acessíveis e atualizadas para os usuários interessados.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-12" class="row">
                <div class="col-lg-8 col-sm-12 col-12 offset-lg-2 d-flex flex-column flex-sm-row">
                    <div class="bloco-numero mb-5">
                        <div class="numero"><span>12</span></div>
                    </div>
                    <div class="bloco-descritivo">
                        <div class="titulo">
                            <span>De que forma a sua organização lida com os dados gerados em suas operações?</span>
                        </div>
                        <div class="alternativa">
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="12" name="quest[12]" value="0" type="radio">
                                <input type="hidden" name="msg[12][0]" value="A empresa não possui preocupação com nenhum dado além da obrigação legal.">
                                <label>A empresa não possui preocupação com nenhum dado além da obrigação legal.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="12" name="quest[12]" value="5" type="radio">
                                <input type="hidden" name="msg[12][5]" value="Departamentos armazenam os dados individualmente.">
                                <label>Departamentos armazenam os dados individualmente.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="12" name="quest[12]" value="10" type="radio">
                                <input type="hidden" name="msg[12][10]" value="São feitos recortes estáticos coletados e integrados manualmente.">
                                <label>São feitos recortes estáticos coletados e integrados manualmente.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="12" name="quest[12]" value="15" type="radio">
                                <input type="hidden" name="msg[12][15]" value="Os dados são coletados automaticamente e acessíveis ao time de dados.">
                                <label>Os dados são coletados automaticamente e acessíveis ao time de dados.</label>
                            </div>
                            <div class="form-check">
                                <input class="radio-check form-check-input" data-num="12" name="quest[12]" value="20" type="radio">
                                <input type="hidden" name="msg[12][20]" value="Os dados são acessíveis a toda a empresa.">
                                <label>Os dados são acessíveis a toda a empresa.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row-13" class="row">
                <div class="col-sm-12 col-12 d-flex justify-content-center">
                    <button type="submit" class="btn-cta cta-vermelho">CONFERIR RESULTADO</button>
                </div>
            </div>
        </form>
    </section>
    <?php include_once(SELF::FOOTER); ?>
</body>
</html>
