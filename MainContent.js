import React from 'react';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="home">
        <h2>Welcome to Finance Management</h2>
        <p>At Finance Management, we offer personalized financial planning and investment management services. Our team of experts is dedicated to helping you achieve your financial goals with confidence.</p>
      </section>
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default MainContent;
