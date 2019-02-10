appImport.controller('exportController', ['$scope', '$filter', 'commonvariable', 'trackedEntityInstances', 'enrollments', 'events','programs', 'status', function ($scope, $filter, commonvariable, trackedEntityInstances, enrollments, events,programs, status) {
      //variables
      var $translate = $filter('translate');
      $scope.getPrograms = function () {
        $scope.ListProgram = [];
    programs.get().$promise.then(function (mePrograms) {
        angular.forEach(mePrograms.programs, function (value, key) {
            let ouPath=value.organisationUnits[0].path;
            let ous=ouPath.split("/");
            $scope.ListProgram.push({ id: value.id, name: value.displayName,ou:ous[1] });
        });
    })
    };
    $scope.selectProgram = function (prSelected) {
        $scope.ProgramId = prSelected.id;
        $scope.ProgramName = prSelected.name;
        $scope.ouPath=prSelected.ou;    
        $scope.validateSelectOption();    
    }
    $scope.validateSelectOption=function(){
        if($scope.ProgramName=="" || $scope.startDate==null || $scope.endDate==null){
            $scope.disabledGen="disabled";
        }
        else{
            $scope.disabledGen="";
        }
    }
    $scope.clearExport=function(){
        $scope.trackedEntityInstanceURL="";
        $scope.enrollmentURL="";
        $scope.eventURL="";
        $scope.disabled="disabled";
        $scope.disabledGen="disabled";
        $scope.ProgramId = "";
        $scope.ProgramName = "";
        $scope.ouPath="";
        $scope.startDate=null;
        $scope.endDate=null;
        $scope.endDateFormated="";
        $scope.startDateFormated="";
        $scope.zipped=false;
    }
    $scope.generateExport=function(){
        let URLactual = window.location;
        let apiFound=false;
        let npath="";
        let listPath=URLactual.pathname.split("/");
        angular.forEach(listPath, function(value,key){
          if(value!="")     
            if(value=="api") {
                apiFound=true;
                npath=npath+"/"+value;
               }
               else{
                   if(apiFound==false){
                     npath=npath+"/"+value;
                   }
               }
            
        });
        $scope.startDateFormated=$scope.startDate.getFullYear()+"-"+($scope.startDate.getMonth()+1)+"-"+$scope.startDate.getDate();
        $scope.endDateFormated=$scope.endDate.getFullYear()+"-"+($scope.endDate.getMonth()+1)+"-"+$scope.endDate.getDate();
        $scope.trackedEntityInstanceURL=URLactual.origin+npath+"/trackedEntityInstances.json"+($scope.zipped?".zip":"")+"?skipPaging=true&ouMode=DESCENDANTS&ou="+$scope.ouPath+"&lastUpdatedStartDate="+$scope.startDateFormated+"&lastUpdatedEndDate="+$scope.endDateFormated+"&program="+$scope.ProgramId;
        $scope.enrollmentURL=URLactual.origin+npath+"/enrollments.json"+($scope.zipped?".zip":"")+"?skipPaging=true&ouMode=DESCENDANTS&ou="+$scope.ouPath+"&programStartDate="+$scope.startDateFormated+"&programEndDate="+$scope.endDateFormated+"&program="+$scope.ProgramId;
        $scope.eventURL=URLactual.origin+npath+"/events.json"+($scope.zipped?".zip":"")+"?skipPaging=true&ouMode=DESCENDANTS&ou="+$scope.ouPath+"&lastUpdatedStartDate="+$scope.startDateFormated+"&lastUpdatedEndDate="+$scope.endDateFormated+"&program="+$scope.ProgramId;
        $scope.disabled="";
    }

    $scope.getPrograms();
    $scope.clearExport();
}]);