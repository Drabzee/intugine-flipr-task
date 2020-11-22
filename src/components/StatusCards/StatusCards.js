import React from 'react';
import Card from './Card/Card';
import style from './StatusCards.module.css';

const StatusCards = ({shipmentData, filter, setFilter}) => {
  let counters = {};
  for(let data of shipmentData) {
    counters[data.current_status_code] = counters[data.current_status_code] ? counters[data.current_status_code]+1 : 1;
  }

  return (
    <div className={style.statusCards}>
      { Object.keys(counters).map(counter => (
        <Card
          key={counter}
          onClick={() => setFilter({...filter, status: counter})}
          statusCode={counter} count={counters[counter]}
          active={filter.status === counter} />
      )) }
    </div>
  )
}

export default StatusCards
