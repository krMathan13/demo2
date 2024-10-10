import React from 'react';
import './Home.css';
import sri from './rx.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className="title">📷 SRI PHOTOGRAPHY 📷</h1>
      <hr></hr>
      <h4 className="subtitle">Wedding Ceremonies | Baby Shower | Birthday Photography</h4>
      <hr />
      <img src={sri} alt="Photography showcase" className="showcase-image" />
      <p className="description">
        Event photography captures the essence and emotions of special occasions,
        from weddings and corporate events to concerts and festivals. A skilled event
        photographer focuses on candid moments and key highlights, ensuring that the
        story of the day is told through striking images. The blend of spontaneity 
        and artistry in event photography creates lasting memories.
      </p>
      <hr />
      <center>
      <a href="https://www.youtube.com/embed/7_tl5V72LRk?si=XCfS1Lo3NeGT3zux">refer our Youtube chenn</a>
      </center>
    </div>
  );
};

export default Home;