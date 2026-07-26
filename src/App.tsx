import { FaWhatsapp } from "react-icons/fa";
import Config from "./app-config.json";
import React from "react";

// Styles
import "./styles/Main.sass";
import "./styles/Header.sass";
import "./styles/Banner.sass";

// Mobile Styles
import "./styles/mobile/Main.sass";
import "./styles/mobile/Header.sass";
import "./styles/mobile/Banner.sass";

function App() {
  function openWhatsapp(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void {
    const endpoint: string = `https://wa.me/${Config.phone}`;
    const msgParam: string =
      "Halo%20Permata%20Komputer,%20saya%20ingin%20bertanya%20tentang%20layanan%20perbaikan%20motherboard.";
    const params: string = `?text=${msgParam}`;
    window.open(`${endpoint}${params}`, "_blank");
  }

  return (
    <div id="App">
      <header>
        <h1>{Config.navbar.title}</h1>
        <p>{Config.navbar.subtitle}</p>
      </header>

      <div id="banner">
        <div
          id="desk-1"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/${Config.navbar.backgroundImage})`,
          }}
        ></div>
      </div>

      <main>
        <section id="about">
          <h1 className="title">Tentang Kami</h1>
          {Config.about.map((i, x) => (
            <p className="info" key={x}>
              {i}
            </p>
          ))}
        </section>
        <section id="activity">
          <h1 className="title">Aktivitas Kami</h1>
          <div id="aktivitas-container">
            {Config.activities.map((act, x) => (
              <div
                key={x}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/pmtkom/${act})`,
                }}
              ></div>
            ))}
          </div>
        </section>
        <section id="contact">
          <h1 className="title">Hubungi Kami</h1>
          {Config.contact.map((c, x) => (
            <p className="info" key={x}>
              {c}
            </p>
          ))}
          <div id="whatsapp-btn" onClick={openWhatsapp}>
            <FaWhatsapp size={30} />
            <p>Hubungi Kami</p>
          </div>
        </section>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} {Config.navbar.title}
            <br />
            All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
