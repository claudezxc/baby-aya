import React from 'react';
import babyPhoto from '../assets/baby.jpg';
import sakura from '../assets/sakura.png';
import vine from '../assets/vine.png'; // 🍃 your vine image

export default function Hero() {
  const formUrl = "https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSd_lH02pGejtAQTt-M2745a6U4GIcLEt6nQL3vjRAPY2qkQGQ%2Fviewform&h=AT3BIVCs2Xc1OyCksW7P8jjmOxGSr4xRYRahCrzZ9JdRv_df4piozqFKF9JEWdLMTUi-pAVKzIK-ApoD3I4nGVSw-y4pup4vqnmq_sE39dAUW_cSAVHDQWsPbkUaKSevEiow3g"; // replace with your actual Google Form link

  return (
    <section id="hero" className="hero">
      {/* Decorative vines */}
      <img src={vine} alt="vine decoration" className="hero-vine left" />
      <img src={vine} alt="vine decoration" className="hero-vine right" />

      <div className="hero-img-wrapper">
        <img src={babyPhoto} alt="Ayanna Monique" className="hero-img" />
        <img src={sakura} alt="sakura decoration" className="hero-sakura up" />
        <img src={sakura} alt="sakura decoration" className="hero-sakura down" />
      </div>

      <h1 className="hero-subtitle">Baptism of our daughter</h1>
      <h2 className="hero-title">Ayanna Monique</h2>
      <p className="hero-text">We invite you to celebrate this special day with us 💕</p>

      <a href={formUrl} target="_blank" rel="noopener noreferrer" className="hero-btn">
        Confirm your attendance here
      </a>
    </section>
  );
}
