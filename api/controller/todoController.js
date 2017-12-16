var Todos = require('../model/todomodel');

function getTodo(res){
    Todos.find(function(err,todos){
        if(err){
            throw err;
        }
        else{
            res.json(todos);
        }
    });
}

module.exports = function(app){
    //get all todos
    app.get('/api/todos', function(req,res){
        getTodo(res);
    });

    app.get('/api/todos/:id',function(req,res){
        Todos.findById({_id: req.params.id},function(err,todos){
            if(err){
                throw err;
            }
            else{
                res.json(todos);
            }
        });
    });
    //create a todo
    app.post('/api/createTodo',function(req,res){
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todos.create(todo, function(err,todo){
            if(err)
            {
                throw err;
            }
            else{
                getTodo(res);
            }
        });
    });

    //update a todo
    app.put('/api/updateTodo',function(req,res){
        if(!req.body._id)
        {
            return res.status(500).send('ID is required');
        }
        else{
            Todos.update({ _id: req.body._id},{text: req.body.text,isDone: req.body.isDone}, function(err,todo){
                if(err){
                    throw err;
                }
                else{
                    getTodo(res);
                }
            });
        }
    });

    //delete
    app.delete('/api/deleteTodo/:id',function(req,res){
        Todos.remove({_id:req.params.id}, function(err,todo){
            if(err)
            {
                return res.return(500).json(err);
            }
            else{
                getTodo(res);
            }
        });
    });


}