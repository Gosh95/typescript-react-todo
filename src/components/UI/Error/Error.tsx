import React from 'react';
import classes from './Error.module.css';

interface Props {
  message: string;
}

const Error: React.FC<Props> = ({ message }) => {
  return <p className={classes.error}>{message}</p>;
};

export default Error;
