import React from 'react';
import styles from './styles.module.css';

export const Button = (props) => {
  return (
    <React.Fragment>
      <button className={styles[props.type]} {...props}>{props.children}</button>
    </React.Fragment>
  )
}