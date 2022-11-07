import React from 'react';
import classes from './Todo.module.css';
import TodoButton from './TodoButton';

interface Props {
  id: string;
  text: string;
  onUpTodo: (id: string) => void;
  onDownTodo: (id: string) => void;
  onDelTodo: (id: string) => void;
}

const Todo: React.FC<Props> = ({ id, text, onUpTodo, onDownTodo, onDelTodo }) => {
  const clickUpHandler = () => {
    onUpTodo(id);
  };

  const clickDownHandler = () => {
    onDownTodo(id);
  };

  const clickDelHandler = () => {
    onDelTodo(id);
  };

  return (
    <div className={classes.todo}>
      <li id={id}>{text}</li>
      <div className={classes['button-group']}>
        <TodoButton text='up' onClick={clickUpHandler} />
        <TodoButton text='down' onClick={clickDownHandler} />
        <TodoButton text='del' onClick={clickDelHandler} />
      </div>
    </div>
  );
};

export default Todo;
