import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

// Styles
import './styles/Main.sass';
import './styles/Header.sass';
import './styles/Banner.sass';

// Mobile Styles
import './styles/mobile/Main.sass';
import './styles/mobile/Header.sass';
import './styles/mobile/Banner.sass';

function App() {
  function openWhatsapp(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    window.open("https://wa.me/6282324380852?text=Halo%20Permata%20Komputer,%20saya%20ingin%20bertanya%20tentang%20layanan%20perbaikan%20motherboard.", "_blank");
  }

  return (
    <div id="App">
      <header>
        <h1>PERMATA KOMPUTER</h1>
        <p>Spesialis Perbaikan Motherboard</p>
      </header>

      <div id="banner">
        <div id="desk-1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/blob/gh-pages/pmtkom/desk-1.jpg)` }}></div>
      </div>

      <main>
        <section id="home">
          <h1 className='title'>Tentang Kami</h1>
          <p className="info">
            Kami menyediakan layanan perbaikan dan pemeliharaan motherboard komputer personal, laptop dan smartphone (android & iPhone).
          </p>
          <p className="info">Berbekal pengalaman lebih dari 10 tahun, kami siap membantu Anda mengatasi masalah teknis dengan cepat dan efisien.</p>
          <p className="info">
            Kami berlokasi di dusun Cikandang, desa Bentarsari, kec. Salem, kab. Brebes, Jawa Tengah.
          </p>
        </section>
        <section id="contact">
          <h1 className='title'>Aktivitas Kami</h1>
          <div id="aktivitas-container">
            <div id="aktivitas-1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/mainboard-asus-x455l.jpg)` }}></div>
            <div id="aktivitas-2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/mainboard-oppo-a5i.jpg)` }}></div>
            <div id="aktivitas-3" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/mainboard-asus-x455l-2.jpg)` }}></div>
            <div id="aktivitas-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/mainboard-dell.jpg)` }}></div>
            <div id="aktivitas-5" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/laptop-hp.jpg)` }}></div>
            <div id="aktivitas-6" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/hp-infinix.jpg)` }}></div>
            <div id="aktivitas-7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/hp-samsung.jpg)` }}></div>
            <div id="aktivitas-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/laptop-sony-vaio.jpg)` }}></div>
          </div>
        </section>
        <section id="about">
          <h1 className='title'>Hubungi Kami</h1>
          <p className="info">
            Untuk pertanyaan, konsultasi, atau penjadwalan perbaikan, silakan hubungi kami melalui WhatsApp.
          </p>
          <p className="info">Klik tombol di bawah ini untuk memulai percakapan dengan kami.</p>
          <div id="whatsapp-btn" onClick={openWhatsapp}>
            <FaWhatsapp size={30} />
            <p>Hubungi Kami</p>
          </div>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Permata Komputer
            <br />
            All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
