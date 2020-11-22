import React from 'react';
import style from './DataTable.module.css';

const DataTable = ({shipmentData, status}) => {

  let dataArray = shipmentData.filter(data => data.current_status_code === status);
  console.log(dataArray);

  // for(let i=0 ; i<50 ; i++) {
  //   dataArray.push({
  //     awbno: "273126375",
  //     carrier: "DTDC",
  //     from: "Bangalore",
  //     to: "New Delhi",
  //     pickup_date: "01/07/2019",
  //     extra_fields: {
  //       expected_delivery_date: "01/07/2019"
  //     },
  //     current_status: "Delivered"
  //   });
  // }

  const formatDate = (d, separator) => {
    const date = new Date(d);
    return ('0' + date.getDate()).slice(-2) + separator
    + ('0' + (date.getMonth()+1)).slice(-2) + separator
    + date.getFullYear();
  }

  return (
    <div className={style.dataTable}>
      <div className={style.container}>
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
              <tr key={Math.random()}>
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
  )
}

export default DataTable
