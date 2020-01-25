angular.module('UpdateCtrl', []).controller('UpdateController', function($scope, $http, $routeParams){
    $scope.show_data = function(){
        $http.get('/api/abouts').then(function(res){
            console.log(res);
            $scope.receive_data = res.data;
        });
    };

    $scope.show_data_ind = function(){
        $http.get('/api/abouts/'+$routeParams.id).then(function(res){
            console.log(res);
            $scope.receive_data_ind = res.data;
        });
    };

    $scope.update_data = function(id){
        $scope.data = $scope.receive_data_ind[0];

        $http.put('/api/abouts/'+id, JSON.stringify($scope.data)).then(function(res){
            console.log(res);
        });
    };

});