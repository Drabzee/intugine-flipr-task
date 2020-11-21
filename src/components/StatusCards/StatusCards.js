import React from 'react';
import Card from './Card/Card';
import style from './StatusCards.module.css';

const StatusCards = () => {
  return (
    <div className={style.statusCards}>
      <Card statusCode={"DEL"} count={916} active/>
      <Card statusCode={"INT"} count={232} />
      <Card statusCode={"OOD"} count={342} />
      <Card statusCode={"DEX"} count={765} />
      <Card statusCode={"NFI"} count={879} />
    </div>
  )
}

export default StatusCards
