// src/components/DressCode.jsx
import React from 'react';

export default function DressCode() {
  return (
    <section id="dress-code" 
      style={{
        padding: '5rem 2rem', 
        textAlign: 'center',
        maxWidth: '800px',
        minHeight: '100vh',
        margin: '0 auto'}}>
      <h2>Dress Code</h2>
      <p>Wear your best outfits in neutral, warm, or earthy tones 🌸</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ background: '#6d4c41', width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div style={{ background: '#d4a373', width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div style={{ background: '#f9f5f0', width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div style={{ background: '#e6a8b7', width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div style={{ background: '#7a8b6e', width: '40px', height: '40px', borderRadius: '50%' }}></div>
      </div>
    </section>
  );
}
