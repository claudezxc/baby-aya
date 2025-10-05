// src/components/GodParents.jsx
import React from 'react';

export default function GodParents() {
  return (
    <section id="god-parents" 
    style={{
        padding: '5rem 2rem', 
        textAlign: 'center',
        maxWidth: '800px',
        minHeight: '100vh',
        margin: '0 auto'}}>
      <h2>Godparents</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem' }}>
        <div>
          <h3>Ninongs</h3>
          <ul>
            <li>Lucas</li>
            <li>Matt</li>
            <li>Michael</li>
          </ul>
        </div>
        <div>
          <h3>Ninangs</h3>
          <ul>
            <li>Fiona</li>
            <li>Gabrielle</li>
            <li>Grace</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
