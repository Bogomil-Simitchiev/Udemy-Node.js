import { Router } from "express";
import { Todo } from "../models/todoModel";

const router = Router();

let todos: Todo[] = [
    {
        id: '2023-08-30T15:59:50.127Z',
        text: 'Some text here'
    }
]


router.get('/todos', (req, res) => {
    res.json({ message: 'Fetch all todos', todos })
})

router.post('/todos', (req, res) => {
    const body = req.body as { text: string }
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo);

    res.json({ message: 'Created new todo', newTodo })
})

router.put('/todos/:todoId', (req, res) => {
    const params = req.params as { todoId: string }
    const body = req.body as { text: string }
    const todoId = params.todoId;

    const todoIndex = todos.findIndex(todo => todo.id == todoId);
    if (todoIndex >= 0) {
        todos[todoIndex].text = body.text;
    }

    res.json({ message: 'Updated current todo' })
})

router.delete('/todos/:todoId', (req, res) => {
    const params = req.params as { todoId: string }
    const todoId = params.todoId;
    todos = todos.filter(todo => todo.id !== todoId);
    res.json({ message: 'Deleted current todo' })
})


export default router;