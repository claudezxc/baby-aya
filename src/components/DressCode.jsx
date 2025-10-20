// src/components/DressCode.jsx
import React from 'react';
import babyAya from '../assets/baby-aya.jpg'; // replace with your actual image file name
export default function DressCode() {
  return (
    <section id="dress-code" className="dress-code">
      <h2>Dress Code Idea</h2>
      <p className='title not-cursive'>Wear your best outfits in neutral, warm, or earthy tones 🌸</p>

      <div className="dress-colors">
        <div className="dress-color" style={{ background: '#f0b9a7ff' }}></div>
        <div className="dress-color" style={{ background: '#b6997cff' }}></div>
        <div className="dress-color" style={{ background: '#fffcf8ff' }}></div>
        <div className="dress-color" style={{ background: '#e7bfc9ff' }}></div>
        <div className="dress-color" style={{ background: '#a8c495ff' }}></div>
      </div>

      {/* 👇 Add the large dress code photo section */}
      <div className="dress-photo-wrapper ">
        <img src={babyAya} alt="Dress Code Inspiration" className="dress-photo" />
      </div>
    </section>
  );
}
