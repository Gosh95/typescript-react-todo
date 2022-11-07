import React from 'react';
import Todo from './Todo/Todo';
import TodoType from '../../interfaces/todo/todo';
import classes from './Todos.module.css';

interface Props {
  todos: TodoType[];
  onUpTodo: (id: string) => void;
  onDownTodo: (id: string) => void;
  onDelTodo: (id: string) => void;
}

const Todos: React.FC<Props> = ({ todos, onUpTodo, onDownTodo, onDelTodo }) => {
  const todoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      onUpTodo={onUpTodo}
      onDownTodo={onDownTodo}
      onDelTodo={onDelTodo}
    />
  ));

  return (
    <div className={classes.todos}>
      {todos.length === 0 && <h2 className={classes.nothing}>Nothing to do.</h2>}
      <ul>{todoList}</ul>
    </div>
  );
};

export default Todos;
