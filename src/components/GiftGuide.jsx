// src/components/GiftGuide.jsx
import React from 'react';

export default function GiftGuide() {
  return (
    <section id="gift-guide" 
    style={{
        padding: '5rem 2rem', 
        textAlign: 'center',
        maxWidth: '800px',
        minHeight: '100vh',
        margin: '0 auto'}}>
      <h2>Gift Guide</h2>
      <p>If you'd like to give a gift, here are some things we’d appreciate:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Moose Gear Baby Diaper Pants (Large)</li>
        <li>Moose Gear Baby Wipes (Powder Scent)</li>
        <li>Moose Gear Mosquito Patch/Bath & Shampoo</li>
        <li>Educational Toys/Books</li>
        <li>Monetary Gift</li>
      </ul>
    </section>
  );
}
