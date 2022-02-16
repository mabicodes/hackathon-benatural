import React from "react";
import "./footer.css";
import linkedIn from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import youtube from "../../assets/img/youtube.png";
import adevinta from "../../assets/img/logo-spain-small.png";
export const Footer = () => {
  return (
    <footer>
      <div className="footerLogos">
        <div className="footerLogoAdevinta">
          <a href="https://www.adevinta.es/" target="_blank">
            <img src={adevinta} alt="Adevinta" />
          </a>
        </div>
        <div className="footerSocialMedia">
          <a href="https://twitter.com/adevintaspain" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/adevintaspain/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/adevintaspain/"
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedInk" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCO-QerE-L6xpGJdv7oVDijg"
            target="_blank"
          >
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="footerComplement">
        <div className="footerInfoAdevinta">
          <p>Be Natural es parte de Adevinta</p>
        </div>
        <div className="footerInfoLinks">
          <a href="https://www.fotocasa.es/es/" target="_blank">
            Fotocasa
          </a>
          <a href="https://www.habitaclia.com/" target="_blank">
            Habitacha
          </a>
          <a href="https://www.infojobs.net/" target="_blank">
            InfoJobs
          </a>
          <a href="https://www.coches.net/" target="_blank">
            Coches.net
          </a>
          <a href="https://motos.coches.net/" target="_blank">
            Motos.net
          </a>
          <a href="https://www.jobisjob.es/" target="_blank">
            JobisJob
          </a>
        </div>
      </div>
      <div className="footerInfo">
        <p> © 2022 Adevinta spain S.L.U Tablón de anuncios gratis.</p>
      </div>
    </footer>
  );
};
