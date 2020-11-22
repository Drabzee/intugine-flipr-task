import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable/DataTable';
import StatusCards from '../../components/StatusCards/StatusCards';
import style from './Home.module.css';
import Layout from '../../components/Layout/Layout';

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

  return (
    <Layout>
      { shipmentData.length && filter.status ? (
        <Fragment>
          <StatusCards filter={filter} setFilter={setFilter} />
          <DataTable shipmentData={shipmentData} status={filter.status} />
        </Fragment>
      ) : error ? <div className={style.error}>{error}</div> : <div /> }
    </Layout>
  );
}

export default Home;