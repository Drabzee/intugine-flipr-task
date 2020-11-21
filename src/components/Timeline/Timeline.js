import React from 'react';
import style from './Timeline.module.css';
import warehouse from '../../assets/warehouse.svg';
import destination from '../../assets/destination.svg';
import Avatar from '../Avatar/Avatar';

const Timeline = () => {
  return (
    <div className={style.timeline}>
      <Avatar bgColor="#d5dfff" width="16" img={destination} alt="destination" margin="50% 57%" />
      <div className={style.container}>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
        <div className={style.timelineRow}>
          <span className={style.dash} />
          <div className={style.tiles}>
            <p>Delivered</p>
            <p>12-07-2019</p>
            <p>14:00</p>
          </div>
        </div>
      </div>
      <Avatar bgColor="#d5dfff" width="16" img={warehouse} alt="warehouse" margin="47% 50%" />
    </div>
  )
}

export default Timeline
