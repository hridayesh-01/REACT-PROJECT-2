import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <p>Take a look at some of our successful projects and client stories. We are proud of our track record in helping clients achieve their financial objectives.</p>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>We helped a young couple create a comprehensive financial plan that set them on the path to financial independence.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>Assisted a small business owner in optimizing their tax strategies, resulting in significant savings and improved cash flow.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>Managed a diversified investment portfolio for a high-net-worth individual, achieving consistent growth and risk mitigation.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
