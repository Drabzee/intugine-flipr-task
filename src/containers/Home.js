import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import StatusCards from '../components/StatusCards/StatusCards';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <StatusCards />
    </div>
  )
}

export default Home;