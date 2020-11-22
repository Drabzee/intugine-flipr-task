import React, { useState, useEffect } from 'react';
import Timeline from './Timeline/Timeline';
import style from './DataTable.module.css';
import {formatDate} from '../../utils/dateTime';

const DataTable = ({shipmentData, status}) => {

  const dataArray = shipmentData.filter(data => data.current_status_code === status);
  const [selectedDelivery, setSelectedDelivery] = useState(dataArray[0]);
  
  useEffect(() => {
    setSelectedDelivery(dataArray[0]);
    // eslint-disable-next-line
  }, [status]);

  return dataArray.length && selectedDelivery ? (
    <div className={style.dataTable}>
      <Timeline timeline={selectedDelivery.scan} />
      <div className={style.container}>
        <div className={style.innerContainer}>
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>AWB Number</th>
                <th>Transporter</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Brand</th>
                <th>Start Date</th>
                <th>ETD</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              { dataArray.map(data => (
                <tr
                  className={ selectedDelivery._id === data._id ? style.active : '' }
                  onClick={ () => setSelectedDelivery(data) } key={data._id}>
                  <td>#{data.awbno}</td>
                  <td>{data.carrier}</td>
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.carrier}</td>
                  <td>{formatDate(data.pickup_date, '/')}</td>
                  <td>{data.extra_fields ? formatDate(data.extra_fields.expected_delivery_date, '/') : ''}</td>
                  <td>{data.current_status}</td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <div className={style.emptyMsg}>No Data Fund</div>
}

export default DataTable
