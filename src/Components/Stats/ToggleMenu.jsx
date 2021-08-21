import React from 'react';

const ToggleMenu = ({ style, menu, setToggle, toggle }) => {
  return (
    <p
      onClick={() => setToggle(menu.key)}
      className={`${style.menuItem} ${
        toggle === menu.key ? style.Active : style.Passive
      }`}
      key={menu.key}
    >
      {menu.name}
    </p>
  );
};

export default ToggleMenu;
