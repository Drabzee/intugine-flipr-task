import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
  return (
    <div onClick={props.onClick} className={`${style.card} ${props.active ? style.active : ''}`}>
      <h4>{props.statusCode}</h4>
      <h1>{props.count}</h1>
    </div>
  )
}

export default Card
