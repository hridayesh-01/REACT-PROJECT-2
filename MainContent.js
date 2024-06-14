import React from 'react';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="home">
        <h2>A Fully Integrated <br/>Planning Advice</h2>
        <p>
          Financepower is a software as a services multipurpose<br/>
          finance management system, especially for them.
        </p>
        
        <a href="#learn-more" className="learn-more-link">Learn More</a>
      </section>
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default MainContent;
