import React from 'react';
import classes from './dropdown.module.scss';

const SecondValuesList = (props) => {
    const { value, secondValue, secondValueHandler } = props;

  return (
    <li onMouseEnter={() => secondValueHandler(value.name)}
        className={secondValue === value.name ? classes.active : undefined}
    >
        <p>{value.name}</p>
    </li>
  )
}

export default SecondValuesList