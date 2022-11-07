import React from 'react';
import classes from './TodoButton.module.css';

interface Props {
  text: string;
  onClick: () => void;
}

const TodoButton: React.FC<Props> = ({ text, onClick }) => {
  const clickButtonHandler = () => {
    onClick();
  };

  return (
    <button className={classes.button} type='button' onClick={clickButtonHandler}>
      <span>{text}</span>
    </button>
  );
};

export default TodoButton;
