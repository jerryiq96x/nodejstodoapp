var todo = require('../model/todomodel');



module.exports = function(app){
    app.get('/api/testApp', function(req,res){
        res.send('Im here');
    })
    app.get('/api/setupTodo',function(req,res){
        //setup seed data
        var seedTodo = [
            {
                text: "Học nodejs",
                isDone: false
            },
            {
                text: "Học Angularjs",
                isDone: false
            },
            {
                text: "Viết một ứng dụng hoàn chỉnh",
                isDone: false
            }
        ];

        todo.create(seedTodo, function(err,results){
            res.send(results);
        });
    });

}