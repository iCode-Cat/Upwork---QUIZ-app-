import React, { useState } from 'react';
import PopupInfo from './PopupInfo';

const Dislaimer = ({ style, data, info, text, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={style.disclaimer}
    >
      <PopupInfo
        label={label}
        isVisible={isVisible}
        disclaimer={data}
        setIsVisible={setIsVisible}
      />
      <img src={info} alt='info-icon' className={style.disclaimer_icon} />
      {text && <p className={style.disclaimer_text}>Disclaimer</p>}
    </div>
  );
};

export default Dislaimer;
