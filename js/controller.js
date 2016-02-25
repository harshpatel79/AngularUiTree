myapp.controller("basicUiTree",['$scope',function($scope){
    $scope.uniqueId = 0 ;
    $scope.data = [];
    $scope.components = ["textbox","textArea","checkbox","radiobutton"];
    $scope.addComponent = function(fields){
      $scope.$apply(function(){
        $scope.data.push({
          id: $scope.data.length+1,
          title: fields.title,
          component: fields,
          nodes: []
        });
      },true);
    };
}]);