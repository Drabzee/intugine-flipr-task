import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import StatusCards from '../../components/StatusCards/StatusCards';
import Timeline from '../../components/Timeline/Timeline';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <StatusCards />
      <div className={style.container}>
        <Timeline />
      </div>
    </div>
  )
}

export default Home;