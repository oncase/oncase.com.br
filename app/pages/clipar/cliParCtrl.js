(function(){

  angular.module('cliParModule',[]).

  controller('cliParCtrl',['jumboBackgroundService','content','$scope','$mdBottomSheet',
  	function(jumboBackgroundService,content,$scope,$mdBottomSheet){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

		$scope.openBottomSheet = function($event, client) {
			var element = $event.srcElement.parentElement.parentElement;
			$mdBottomSheet.show({
			  template: '<md-bottom-sheet><h1>'+client.name+'</h1><p>'+client.areas+'</p><p><a target="_blank" class="no-outline" href="'+client.site+'">'+client.site+'</a></p></md-bottom-sheet>',
			  targetEvent: $event,
			  parent:angular.element(element)
			});
		};

		this.clients = [
			{
				name : "Caixa Econômica Federal",
				logo : "../../../assets/img/clients/logo-caixa.jpg",
				areas : "Projetos de Big Data e Data Mining",
				site : "http://caixa.gov.br",
				priority : 100000
			},
			{
				name : "Nagem",
				logo : "../../../assets/img/clients/logo-nagem.png",
				areas : "Faturamento, Serviços Financeiros, Dashboards e melhoria de processos",
				site : "http://nagem.com.br",
				priority : 99000
			},
			{
				name : "Delphos",
				logo : "../../../assets/img/clients/logo-delphos.png",
				areas : "Execução de projetos e Mineração de Dados",
				site : "http://www.delphos.com.br",
				priority : 98000
			},
			{
				name : "Serpro",
				logo : "../../../assets/img/clients/logo-serpro.png",
				areas : "Suporte ao produto e Consultorias",
				site : "http://serpro.gov.br",
				priority : 97000
			},
			{
				name : "ITA",
				logo : "../../../assets/img/clients/logo-ita.png",
				areas : "Suporte em Data Mining",
				site : "http://www.ita.br",
				priority : 96000
			},
			{
				name : "Autoviação 1001",
				logo : "../../../assets/img/clients/logo-1001.png",
				areas : "Suporte ao produto e ao Desenvolvedor",
				site : "http://www.autoviacao1001.com.br",
				priority : 95000
			},
			{
				name : "Vale",
				logo : "../../../assets/img/clients/logo-vale.png",
				areas : "Consultoria em serviços",
				site : "http://vale.com",
				priority : 94000
			},
			{
				name : "Visão Mundial",
				logo : "../../../assets/img/clients/logo-visao-mundial.png",
				areas : "Implantação de BI e suporte a produto e desenvolvedor",
				site : "http://vale.com",
				priority : 93000
			},
			{
				name : "Total Combustíveis",
				logo : "../../../assets/img/clients/logo-total.png",
				areas : "Implantação de BI e suporte a produto e desenvolvedor",
				site : "http://www.totalcombustiveis.com.br",
				priority : 92000
			},
			{
				name : "Universidade CEUMA",
				logo : "../../../assets/img/clients/logo-ceuma.png",
				areas : "Implantação de BI e suporte a produto e desenvolvedor",
				site : "http://www.ceuma.br",
				priority : 91000
			},
			{
				name : "PQS",
				logo : "../../../assets/img/clients/logo-pqs.png",
				areas : "Implantação de BI para Controladoria e suporte ao produto",
				site : "http://www.pqspe.com.br",
				priority : 90000
			},
			{
				name : "Caern",
				logo : "../../../assets/img/clients/logo-caern.png",
				areas : "Implantação de BI, Mineração de Dados e suporte ao produto",
				site : "http://www.caern.rn.gov.br",
				priority : 89000
			},
			{
				name : "Datamétrica",
				logo : "../../../assets/img/clients/logo-datametrica.png",
				areas : "Implantação de BI, Mineração de Dados e Fábrica de Software",
				site : "http://www.datametrica.com.br",
				priority : 88000
			},
			{
				name : "Unimed Recife",
				logo : "../../../assets/img/clients/logo-unimed-recife.png",
				areas : "Implantação de BI e Fábrica de Software",
				site : "http://www.unimedrecife.com.br",
				priority : 87000
			},
			{
				name : "Mondelez International",
				logo : "../../../assets/img/clients/logo-mondelez.png",
				areas : "Implantação de produto para Supply Chain, Fábrica de Software e suporte ao produto",
				site : "http://www.mondelez.com.br",
				priority : 86000
			},
			{
				name : "Faculdade Pernambucana de Saúde",
				logo : "../../../assets/img/clients/logo-fps.png",
				areas : "Implantação de BI para gestão acadêmica e controle financeiro",
				site : "http://www.fps.edu.br",
				priority : 85000
			}
		];

  }]);

})();