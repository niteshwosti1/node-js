const express = require('express')
const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is up and running on port 3000")
})

let todos =[];
app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.get('/todos:id',(req,res)=>{
    const todo = todos.find(t=>t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send('Invalid Todo');
    res.json(todo);
})

app.post('/todos/add',(req,res)=>{
    const todo ={
        id:todos.length+1,
        title:req.body.title
    }
    todos.push(todo);
    res.json(todo);
})

app.put('todos/edit/:id',(req,res)=>{
    const todo = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send("Indalid todo");
    todo.title= req.body.title;
    res.json(todo);
})