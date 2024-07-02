import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Où nous trouver</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"><FiMapPin style={{ marginRight: '10px' }} /> Akanda, Libreville, Gabon</p>
        <p className="p__opensans"><FiPhone style={{ marginRight: '10px' }} /> 074 06 37 69</p>
        <p className="p__opensans"><FiMail style={{ marginRight: '10px' }} /> Lemayonakanda@gmail.com</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitez-nous</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.gallery03} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
