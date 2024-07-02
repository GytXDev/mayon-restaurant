import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const scrollToLogin = () => {
    const loginSection = document.getElementById('menu');
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Découvrez de nouvelles saveurs" />
        <h1 className="app__header-h1">Savourer l'Authenticité Culinaire</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Installez-vous, détendez-vous et laissez-vous emporter par une expérience gastronomique unique. Découvrez des plats préparés avec soin et passion, inspirés par notre tradition culinaire et nos ingrédients de qualité.</p>
        <button type="button" className="custom__button" onClick={scrollToLogin}>Découvrir le Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="image d'accueil" />
      </div>
    </div>
  );
};

export default Header;
