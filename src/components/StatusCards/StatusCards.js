import React from 'react';
import Card from './Card/Card';
import style from './StatusCards.module.css';

const StatusCards = ({filter, setFilter}) => {
  return (
    <div className={style.statusCards}>
      <Card
        onClick={() => setFilter({...filter, status: 'DEL'})}
        statusCode={"DEL"} count={916}
        active={filter.status === 'DEL'} />
      <Card
        onClick={() => setFilter({...filter, status: 'INT'})}
        statusCode={"INT"} count={232}
        active={filter.status === 'INT'} />
      <Card
        onClick={() => setFilter({...filter, status: 'OOD'})}
        statusCode={"OOD"} count={342}
        active={filter.status === 'OOD'} />
      <Card
        onClick={() => setFilter({...filter, status: 'DEX'})}
        statusCode={"DEX"} count={765}
        active={filter.status === 'DEX'} />
      <Card
        onClick={() => setFilter({...filter, status: 'NFI'})}
        statusCode={"NFI"} count={879}
        active={filter.status === 'NFI'} />
    </div>
  )
}

export default StatusCards
