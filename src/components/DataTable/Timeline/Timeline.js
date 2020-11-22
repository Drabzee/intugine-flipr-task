import React from 'react';
import style from './Timeline.module.css';
import warehouse from '../../../assets/warehouse.svg';
import destination from '../../../assets/destination.svg';
import Avatar from '../../Avatar/Avatar';
import { formatDate, formatTime } from '../../../utils/dateTime';

const Timeline = ({selectedDelivery}) => {

  return selectedDelivery ? (
    <div className={style.timeline}>
      <Avatar bgColor="#d5dfff" width="16" img={destination} alt="destination" margin="50% 57%" />
        <div className={style.container}>
          { selectedDelivery.scan.map(data =>
            <div key={`${data.location}-${data.time}`} className={style.timelineRow}>
              <span className={style.dash} />
              <div className={style.tiles}>
                <p>{ data.location }</p>
                <p>{ formatDate(data.time, '-') }</p>
                <p>{ formatTime(data.time) }</p>
              </div>
            </div>
          ) }
        </div>
      <Avatar bgColor="#d5dfff" width="16" img={warehouse} alt="warehouse" margin="47% 50%" />
    </div>
  ) : <div />
}

export default Timeline
