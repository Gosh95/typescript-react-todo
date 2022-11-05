import React from 'react';
import classes from './Todos.module.css';

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
  const todos = TODO_DUMMY.map((todo) => <li key={todo.id}>{todo.text}</li>);

  return (
    <main className={classes.todos}>
      <div>
        <ul>{todos}</ul>
      </div>
    </main>
  );
};

export default Todos;
