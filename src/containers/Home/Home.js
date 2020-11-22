import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable/DataTable';
import Navbar from '../../components/Navbar/Navbar';
import StatusCards from '../../components/StatusCards/StatusCards';
import Timeline from '../../components/Timeline/Timeline';
import style from './Home.module.css';

const Home = () => {

  const [shipmentData, setShipmentData] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/uddeshya', {
          email: 'uddeshya.20491@ggnindia.dronacharya.info'
        }, {
          headers: { Authorization: `Bearer tTU3gFVUdP` }
        });

        setShipmentData(res.data.data);
      } catch(err) {
        setError(err.toString());
      }
    })();
  }, []);

  useEffect(() => {
    if(shipmentData.length)
      setFilter({
        status: 'DEL'
      });
  }, [shipmentData]);

  return shipmentData.length ? (
    <div className="home">
      <Navbar />
      <StatusCards filter={filter} setFilter={setFilter} />
      <div className={style.container}>
        <Timeline />
        <DataTable shipmentData={shipmentData} status={filter.status} />
      </div>
    </div>
  ) : error ? <p>Error : {error}</p> : <div />
}

export default Home;