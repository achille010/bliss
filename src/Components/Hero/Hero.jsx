import logo from "../img/logo/logo.svg";
import heroImg from "../img/hero/hero-img.svg";
import "./Hero.css";
import lineICons from "../img/client-logo/lineicons.svg";
import grayGrids from "../img/client-logo/graygrids.svg";
import pageBulb from "../img/client-logo/pagebulb.svg";
import uiDeck from "../img/client-logo/uideck.svg";
import { useState, useEffect } from "react";

const Hero = () => {
  const navComponents = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Pricing",
    "Team",
    "Contact",
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dancing+Script:wght@400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="allContainer">
        <div className={`${scrolled ? 'navbar--scrolled' : ''}`}>
          <div className="bliss-logo">
            <a href="#">
              <img src={logo} alt="Bliss logo" className="logo" />
            </a>
          </div>
          <div className="nav-components">
            {navComponents.map((navComponent) => (
              <a className="nav-component hover-link" href="#">
                {navComponent}
              </a>
            ))}
          </div>
        </div>
        <div className="mid-hero">
          <div className="left">
            <div className="welcome">Welcome To Bliss</div>
            <div className="version">
              You are using free lite <br />
              <span style={{ marginTop: 5 }}>version of Bliss.</span>
            </div>
          </div>
          <div className="right">
            <img src={heroImg} className="heroImg" alt="Heroooo" />
          </div>
        </div>
      </div>
      <div className="UndHero">
        <div className="imgs">
          <div className="img">
            <img src={lineICons} alt="Line Icons" className="picImg" />
          </div>
          <div className="img">
            <img src={uiDeck} alt="UI Deck" className="picImg" />
          </div>
          <div className="img">
            <img src={grayGrids} alt="Gray Grids" className="picImg" />
          </div>
          <div className="img">
            <img src={pageBulb} alt="Page Bulb" className="picImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
