import React from 'react';
import crucifix from '../assets/crucifix.png'; // ⚠️ placeholder image, replace with your file

export default function EventDetails() {
  const coordsUrl = 'https://maps.google.com?q=10.986351,124.891785';

  return (
    <section id="event-details" className="event-details">
      {/* Calendar Section */}
      <div className="calendar-row">
        <div className="calendar-day">THURSDAY</div>
        <div className="calendar-date" style={{left: '20px'}}>
          <span className="calendar-number">30</span>
          <span className="calendar-month">OCTOBER</span>
        </div>
        <div className="calendar-time">10:00 AM</div>
      </div>

      {/* Church Section */}
      <div className="church-row">
        <div className="church-name">St. Isidore Parish</div>
        <img src={crucifix} alt="Crucifix" className="crucifix-icon" />
        <div className="church-address">Brgy. Maghubas, Burauen, Leyte</div>
      </div>

      {/* Appreciation Message */}
      <p className="event-message">We Appreciate Your Presence</p>

      {/* Button */}
      <a
        href={coordsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="event-btn"
      >
        View Map
      </a>
    </section>
  );
}
