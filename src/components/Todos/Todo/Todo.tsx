import React from 'react';
import classes from './Todo.module.css';
import TodoButton from './TodoButton';

interface Props {
  id: string;
  text: string;
}

const Todo: React.FC<Props> = ({ id, text }) => {
  return (
    <div className={classes.todo}>
      <li id={id}>{text}</li>
      <div className={classes['button-group']}>
        <TodoButton text='up' />
        <TodoButton text='down' />
        <TodoButton text='del' />
      </div>
    </div>
  );
};

export default Todo;
