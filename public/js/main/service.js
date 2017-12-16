var app = angular.module("app.todos")
app.factory("svTodos", ["$http", function($http){
    return {
        get: function(){
            return $http.get("/api/todos");
        },
        create: function(todoData){
            return $http.post('/api/createTodo', todoData);
        },
        update: function(todoData){
            return $http.put('/api/updateTodo/',todoData);
        },
        delete: function(id){
            return $http.delete('/api/deleteTodo/'+id);
        }
    }
}]);