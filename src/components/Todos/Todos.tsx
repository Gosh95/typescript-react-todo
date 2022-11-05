import React, { useState } from 'react';
import classes from './Todos.module.css';
import TodoForm from './Todo/TodoForm';
import Todo from './Todo/Todo';
import TodoType from '../../interfaces/todo/todo';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const todoList = todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />);

  const addTodoHandler = (todo: TodoType) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  return (
    <main className={classes.todos}>
      <TodoForm onAddTodo={addTodoHandler} />
      <div>
        {todos.length === 0 && <h2 className={classes.nothing}>Nothing to do.</h2>}
        {todoList}
      </div>
    </main>
  );
};

export default Todos;
