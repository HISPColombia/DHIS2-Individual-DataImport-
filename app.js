var appImport = angular.module("appImport", ['ngRoute', 'Dhis2Api', 'pascalprecht.translate', 'ui.bootstrap', 'd2Menu', 'angularFileUpload', 'angular-md5', 'ngJsonExplorer']);

appImport.config(function($routeProvider) {
 
	  $routeProvider.when('/import', {
	      templateUrl: "modules/import/importView.html",
	      controller: "importController"
	  });
	  $routeProvider.otherwise({
	      redirectTo: '/import'
	  });   

	});

appImport.config(function ($translateProvider, urlApi) {
  
	  $translateProvider.useStaticFilesLoader({
          prefix: 'languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'en'],
			    {
			        'en*': 'en',
			        'es*': 'es',
			        '*': 'en' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['en']);

	  jQuery.ajax({ url: urlApi + '/userSettings/keyUiLocale/', contentType: 'text/plain', method: 'GET', dataType: 'text', async: false}).success(function (uiLocale) {
		  if (uiLocale == ''){
			  $translateProvider.determinePreferredLanguage();
		  }
		  else{
			  $translateProvider.use(uiLocale);
		  }
      }).fail(function () {
    	  $translateProvider.determinePreferredLanguage();
	  });
	  
});