var app = angular.module("app.todos",['xeditable']);

app.controller("todoController",['$scope','svTodos', function($scope,svTodos){
    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [];
    //load data from api
    svTodos.get().then(function successCallback(data){
        $scope.todos = data.data;
        $scope.loading = false;
    },
    function errorCallback(data){
        console.log(data);
    });

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        svTodos.create(todo).then(function (data) {
            $scope.todos = data.data;
            $scope.formData.text = '';
            $scope.loading = false;
        });
    }

    $scope.updateTodo = function(todo){
        $scope.loading = true;

        svTodos.update(todo).then(function(data) {
            $scope.todos  = data.data;
            $scope.loading = false;
        });

    }

    $scope.deleteTodo = function(todo){
        $scope.loading = true;

        svTodos.delete(todo._id).then(function(data){
            $scope.todos = data.data;
            $scope.loading = false;
        }); 
    }
}]);