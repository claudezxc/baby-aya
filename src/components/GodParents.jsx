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
          <ul className='Ninongs cursive'>
            <li>Antonio Noyne A. Domalaon </li>
            <li>Arman C. Ortega</li>
            <li>Cesar Cyrille S. Uy </li>
            <li>Christian Anthony Cabella</li>
            <li>Dr. Brix P. Roño</li>
            <li>El Niño John Yrigan</li>
            <li>Engr. Christian Jorge A. Yunting</li>
            <li>Engr. Dave Leandro A. Tan</li>
            <li>Engr. Emman Catenza</li>
            <li>Engr. Jairus Fritzh G. Delantar </li>
            <li>Engr. James A. Voces</li>
            <li>Engr. John Carlo Cordero</li>
            <li>Engr. John Paul Robin</li>
            <li>Engr. Kent Harold Cuaderno </li>
            <li>Engr. Thomas Anthony L. Ygrubay</li>
            <li>James Jullian Y. Leoncio </li>
            <li>Jean-Arsenio Louis N. Bagsarsa</li>
            <li>John Henry A. Tan </li>
            <li>Krenz Leo L. Piczon </li>
            <li>Miguel O. Alvarez </li>
          </ul>
        </div>
        <div>
          <h3>Ninangs</h3>
          <ul className='Ninangs cursive'>
            <li>Abby Kaye C. Ortega </li>
            <li>Angelica Mae B. Tan</li>
            <li>April Abegail DC. Balingit </li>
            <li>April Katheryn B. Castillo</li>
            <li>Camille Ayn Sesca M. Coprada </li>
            <li>Camille Franchesca A. Ygrubay </li>
            <li>Cleo Camarines  </li>
            <li>Daiserie Estuita</li>
            <li>Jinky T. Ortega</li>
            <li>Krizza Ivy Serato </li>
            <li>Kya Charity A. Tarrayo  </li>
            <li>Ma. Lourdes B. Alvarez</li>
            <li>Marian C. Lingan </li>
            <li>Marsha Joyce B. Rosales </li>
            <li>Zyra Lottie D. Serano</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
