const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// array to store data 
let todoList = [];

//get todo

app.get('/todos' , (req,res) => {
    res.json(todoList);
});

app.post('/todos' , (req,res) => {
    const todo = req.body;
    todoList.push(todo);
    res.status(201).send('Todo added successfully');

    if (index !== -1) {
      todoList[index] = { ...todoList[index], ...updatedTodo };
      res.send("Todo updated successfully");
    } else {
      res.status(404).send("Todo not found");
    }
});


app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const index = todoList.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    todoList.splice(index, 1);
    res.send("Todo deleted successfully");
  } else {
    res.status(404).send("Todo not found");
  }
});


app.put('/todos/id:', (req,res) => {
    const todoID =req.params.id;
    const updatedTodo = req.body;
    const index = todoList.findIndex(todo => todo.id === todoID);
})

app.listen(PORT, () => {
    console.log('server is running successfully')
});