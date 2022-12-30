import React from 'react';
import Social from '../Social/Social';
import Data from '../Data/Data';
import './Home.css';


export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div className="home_img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
}