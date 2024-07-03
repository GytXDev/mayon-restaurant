import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import whatsappIcon from '../../assets/whatsapp.png'; 
import './Newsletter.css';

const Newsletter = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = '+24104063769';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Commander via WhatsApp" />
        <h1 className="headtext__cormorant">Passez Votre Commande via WhatsApp</h1>
        <p className="p__opensans">N'hésitez pas à nous contacter pour commander! Livraison rapide</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <button type="button" className="custom__button whatsapp__button" onClick={handleWhatsAppOrder}>
          <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp__icon" />
          <span className="whatsapp__text">Commander via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
