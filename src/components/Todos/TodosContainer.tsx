import React, { useState } from 'react';
import TodoForm from './Todo/TodoForm';
import Todos from './Todos';
import TodoType from '../../interfaces/todo/todo';
import classes from './TodosContainer.module.css';

const TodosContainer: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodoHandler = (todo: TodoType) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  return (
    <main className={classes.container}>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos todos={todos} />
    </main>
  );
};

export default TodosContainer;
