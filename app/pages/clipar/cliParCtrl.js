(function(){

  angular.module('cliParModule',[]).

  controller('cliParCtrl',['jumboBackgroundService','content','$scope','$mdBottomSheet','$rootScope','$window',
  	function(jumboBackgroundService,content,$scope,$mdBottomSheet, $rootScope,$window){



		/* Meta tags per page
		*/
      $rootScope.metaTitleSuffix = " - Clientes e Parceiros";
      $rootScope.metaDescription = "Quem são nossos clientes. Somos experts em Business Analytics, BigData and Data Visualization e orgulhosos Pentaho Premium Partners.";

      

	  	jumboBackgroundService.setSmall(true);
	    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

		$scope.openBottomSheet = function($event, client) {
			var element = $event.target.parentElement.parentElement;
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
			},
			{
				name : "Sebrae",
				logo : "../../../assets/img/clients/logo-sebrae.png",
				areas : "Implantação de BI",
				site : "http://www.sebrae.com.br",
				priority : 84000
			},
			{
				name : "Habitat para a Humanidade",
				logo : "../../../assets/img/clients/logo-habitat.png",
				areas : "Implantação de BI",
				site : "http://www.habitatbrasil.org.br",
				priority : 83000
			},
			{
				name : "Burger King NE",
				logo : "../../../assets/img/clients/logo-bgne.png",
				areas : "Implantação de BI",
				site : "http://www.burgerking.com.br",
				priority : 82000
			},
			{
				name : "UFPE",
				logo : "../../../assets/img/clients/logo-ufpe.png",
				areas : "Desenvolvimento de pesquisa com dados indígenas",
				site : "http://www.ufpe.br",
				priority : 81000
			},
			{
				name : "Queiroz Galvao",
				logo : "../../../assets/img/clients/logo-queiroz-galvao.png",
				areas : "Implantação de ERP",
				site : "http://www.queirozgalvao.com.br",
				priority : 80000
			},
			{
				name : "Marisa",
				logo : "../../../assets/img/clients/logo-marisa.png",
				areas : "Implantação de produto Analítico para avaliação de crédito",
				site : "http://www.queirozgalvao.com.br",
				priority : 79000
			},
			{
				name : "Banco da Amazônia",
				logo : "../../../assets/img/clients/logo-basa.png",
				areas : "Implantação de BI e Suporte ao Produto",
				site : "http://www.queirozgalvao.com.br",
				priority : 78000,
			},
			{
				name : "Pitú",
				logo : "../../../assets/img/clients/logo-pitu.png",
				areas : "Implantação de BI e Suporte ao Produto",
				site : "http://www.pitu.com.br",
				priority : 78000
			},
			{
				name : "UNIEURO",
				logo : "../../../assets/img/clients/logo-unieuro.png",
				areas : "Implantação de BI e Suporte ao Produto",
				site : "http://www.unieuro.edu.br/",
				priority : 77000
			},
			{
				name : "Catho",
				logo : "../../../assets/img/clients/logo-catho.png",
				areas : "Implantação de BI e Suporte ao Produto",
				site : "http://www.catho.com.br/",
				priority : 76000
			},
			{
				name : "Romarco Construtora",
				logo : "../../../assets/img/clients/logo-romarco.png",
				areas : "Implantação de BI e App de apoio",
				site : "www.romarcoconstrutora.com.br",
				priority : 75000
			}
		];

		$window.prerenderReady = true;

  }]);

})();