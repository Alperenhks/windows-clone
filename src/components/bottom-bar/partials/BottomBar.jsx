import React, { useState, useEffect } from 'react';
import '../style/BottomBar.css';
import Git from '../../../assets/github.svg';
import Downloads from '../../../assets/Downloads.svg';
import Gallery from '../../../assets/Pictures.svg';
import Documents from '../../../assets/Documents.svg';
import onButton from '../../../assets/On_button.svg';
import pp from "../../../assets/pp.jpeg"

function BottomBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className='bottom-bar'>
      <div className='bottom-items'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/768px-Windows_logo_-_2021.svg.png'
          alt='Windows Logo'
          onClick={handleModalToggle}
        />

        <input placeholder='Ara' type='text' />
        <img src={Git} alt='Git' />
        <img src={Downloads} alt='İndirmeler' />
        <img src={Gallery} alt='Galeri' />
        <img src={Documents} alt='Belgeler' />
      </div>

      <div className='bottom-bar-info'>
        <p>{currentTime.toLocaleTimeString()} </p>
        <p>{currentTime.toLocaleDateString()}</p>
      </div>

      {isModalOpen && (
  <div className='modal-overlay' onClick={handleModalToggle}>
    <div className='modal-content'>
      <div className='image-row'>
        <img src={Git} alt='Git' />
        <img src={Downloads} alt='İndirmeler' />
      </div>
      <div className='image-row'>
        <img src={Gallery} alt='Galeri' />
        <img src={Documents} alt='Belgeler' />
      </div>
      <div className='modal-footer'>
        <div className='user-info'>
          <img src={pp} alt='Profil Resmi' />
          <p>Alperen Harmankaşı</p>
        </div>
        <a href='https://www.google.com.tr/'>
          <img src={onButton} alt='Button' />
        </a>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default BottomBar;
