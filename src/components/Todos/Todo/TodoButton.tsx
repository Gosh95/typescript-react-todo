import React from 'react';
import classes from './TodoButton.module.css';

interface Props {
  text: string;
}

const TodoButton: React.FC<Props> = ({ text }) => {
  return (
    <button className={classes.button} type='button'>
      <span>{text}</span>
    </button>
  );
};

export default TodoButton;
