angular.module('DeleteCtrl', []).controller('DeleteController', function($scope, $http, $routeParams){
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


    $scope.delete_data = function(id){
        $scope.data = $scope.receive_data_ind[0];

        $http.delete('/api/delete/'+id, JSON.stringify($scope.data)).then(function(res){
            console.log(res);
        });
    };
})