import React from 'react';
import style from './Timeline.module.css';
import warehouse from '../../assets/warehouse.svg';
import destination from '../../assets/destination.svg';

const Timeline = () => {
  return (
    <div className={style.timeline}>
      <span className={style.avatar}><img src={destination} width={20} alt="profile" /></span>
      <div className={style.container}>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
      </div>
      <span className={style.avatar}><img src={warehouse} width={20} alt="profile" /></span>
    </div>
  )
}

export default Timeline
