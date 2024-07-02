import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">Akanda, Libreville, Gabon</p>
        <p className="p__opensans">074-06-37-69</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La meilleure façon de se trouver.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/lemayonpizza" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/lemayonpizzeria/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires d'ouverture</h1>
        <p className="p__opensans">Lundi-Vendredi :</p>
        <p className="p__opensans">08:00 - 00:00</p>
        <p className="p__opensans">Samedi-Dimanche :</p>
        <p className="p__opensans">09:00 - 22:00</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{currentYear} Le Mayon. Tous droits réservés.</p>
    </div>

  </div>
);

export default Footer;
