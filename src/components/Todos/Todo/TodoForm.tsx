import React from 'react';
import classes from './TodoForm.module.css';

const TodoForm: React.FC = () => {
  return (
    <form className={classes.form}>
      <label htmlFor='todo-input'>Todos</label>
      <div className={classes.controls}>
        <input type='text' id='todo-input' placeholder='What will u do today?' />
        <button>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
