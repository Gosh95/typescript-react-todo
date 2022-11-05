import React from 'react';
import classes from './Todos.module.css';
import TodoForm from './Todo/TodoForm';
import Todo from './Todo/Todo';

export const TODO_DUMMY = [
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
  {
    id: Math.random().toString(),
    text: 'i will do something.',
  },
];

const Todos: React.FC = () => {
  const todos = TODO_DUMMY.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />);

  return (
    <main className={classes.todos}>
      <TodoForm />
      <div>
        <ul>{todos}</ul>
      </div>
    </main>
  );
};

export default Todos;
