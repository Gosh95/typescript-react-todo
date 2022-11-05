import React from 'react';
import Todo from './Todo/Todo';
import TodoType from '../../interfaces/todo/todo';
import classes from './Todos.module.css';

interface Props {
  todos: TodoType[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  const todoList = todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />);
  return (
    <div className={classes.todos}>
      {todos.length === 0 && <h2 className={classes.nothing}>Nothing to do.</h2>}
      <ul>{todoList}</ul>
    </div>
  );
};

export default Todos;
