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

  const upTodoHandler = (id: string) => {
    const prevTodos = [...todos];
    const currentTodoIdx = prevTodos.findIndex((todo) => todo.id === id);
    if (currentTodoIdx === 0) {
      return;
    }

    const currentTodo = prevTodos[currentTodoIdx];
    prevTodos[currentTodoIdx] = prevTodos[currentTodoIdx - 1];
    prevTodos[currentTodoIdx - 1] = currentTodo;
    setTodos(prevTodos);
  };

  const downTodoHandler = (id: string) => {
    const prevTodos = [...todos];
    const currentTodoIdx = prevTodos.findIndex((todo) => todo.id === id);
    if (currentTodoIdx === prevTodos.length - 1) {
      return;
    }

    const currentTodo = prevTodos[currentTodoIdx];
    prevTodos[currentTodoIdx] = prevTodos[currentTodoIdx + 1];
    prevTodos[currentTodoIdx + 1] = currentTodo;
    setTodos(prevTodos);
  };

  const delTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={classes.container}>
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos todos={todos} onUpTodo={upTodoHandler} onDownTodo={downTodoHandler} onDelTodo={delTodoHandler} />
    </main>
  );
};

export default TodosContainer;
