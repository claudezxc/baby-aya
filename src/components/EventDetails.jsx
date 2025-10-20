import React from 'react';
import crucifix from '../assets/crucifix.png'; 

export default function EventDetails() {
  const churchMap = 'https://maps.app.goo.gl/8ELpooqMT6e7XmNK6';
  const receptionMap = 'https://maps.app.goo.gl/V55zZ6pjphujYhB39';

  return (
    <section id="event-details" className="event-details">
      {/* Calendar Section */}
      <div className="calendar-row">  
        <div className="calendar-day">THURSDAY</div>
        <div className="calendar-date">
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

      {/* Buttons Row */}
      <div className="map-buttons">
        <a
          href={churchMap}
          target="_blank"
          rel="noopener noreferrer"
          className="event-btn"
        >
          Church Map
        </a>
        <a
          href={receptionMap}
          target="_blank"
          rel="noopener noreferrer"
          className="event-btn secondary"
        >
          Reception Map
        </a>
      </div>

      {/* Reception Section */}
      <div className="reception-row">
        <h3>Reception</h3>
        <div className="reception-address">
         El Montaño Vista Resort, Burauen, Leyte
        </div>
      </div>

      {/* Appreciation Message */}
      <p className="event-message">We Appreciate Your Presence</p>
    </section>
  );
}
