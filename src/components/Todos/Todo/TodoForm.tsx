import React, { useState, useRef, FormEvent } from 'react';
import TodoType from '../../../interfaces/todo/todo';
import Error from '../../UI/Error/Error';
import classes from './TodoForm.module.css';

interface Props {
  onAddTodo: (todo: TodoType) => void;
}

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [isValidForm, setIsValidForm] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitTodoHandler = (e: FormEvent) => {
    e.preventDefault();

    const input = inputRef.current! as HTMLInputElement;
    const enteredTodoText = input.value;
    if (enteredTodoText.trim().length === 0) {
      setIsValidForm(false);
      input.focus();
      return;
    }

    onAddTodo({ id: Math.random().toString(), text: enteredTodoText });
    input.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitTodoHandler}>
      <label htmlFor='todo-input'>Todos</label>
      <div className={classes.controls}>
        <input ref={inputRef} type='text' id='todo-input' placeholder='What will u do today?' />
        <button type='submit'>Add</button>
      </div>
      {!isValidForm && <Error message='Invalid input value.' />}
    </form>
  );
};

export default TodoForm;
