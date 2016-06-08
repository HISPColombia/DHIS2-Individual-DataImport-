/*
 *	Architeture 
 * 	Helder Yesid Castrillón
 * 	Hisp Colombia 2014
 * 
 * Core Module for using WebApi of dhis2
 * It is the persistence in the FrontEnd
 * 
 * */
var Dhis2Api = angular.module("Dhis2Api", ['ngResource']);

var urlApi = "../../../api";
//Create all common variables of the apps 
Dhis2Api.factory("commonvariable", function () {
	var Vari={
	    url: urlApi
			};

   return Vari; 
});


Dhis2Api.constant("urlApi", urlApi);



////Api Resource
Dhis2Api.factory("trackedEntityInstances", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "/trackedEntityInstances/:id",
		{
		    id: '@id'
		},
		{
		    POST: { method: "POST" },
		    DELETE: { method: "DELETE" },
		    PUT: { method: "PUT" },
		    PATCH: { method: "PATCH" }
		});
}]);

////Api Enrollment
Dhis2Api.factory("enrollments", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "/enrollments/:id",
		{
		    id: '@id'
		},
		{
		    POST: { method: "POST" },
		    DELETE: { method: "DELETE" },
		    PUT: { method: "PUT" },
		    PATCH: { method: "PATCH" }
		});
}]);

////Api Enrollment
Dhis2Api.factory("status", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "/enrollments/:id/:status",
		{
		    id: '@id',
		    status: '@status'
		},
		{
		    POST: { method: "POST" },
		    DELETE: { method: "DELETE" },
		    PUT: { method: "PUT" },
		    PATCH: { method: "PATCH" }
		});
}]);


////Api Events
Dhis2Api.factory("events", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "/events/:id",
		{
		    id: '@id'
		},
		{
		    POST: { method: "POST" },
		    DELETE: { method: "DELETE" },
		    PUT: { method: "PUT" },
		    PATCH: { method: "PATCH" }
		});
}]);

