import React, { useState } from 'react';
import style from './style.css';

const BurgerMenu: StorefrontFunctionComponent = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`${style.menu} ${isOpen ? style.open : ''}`}>
        <button className={style.close} onClick={toggleMenu}>✖</button>
        {/* Menu content goes here */}
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
      {!isOpen && <button className={style.burger} onClick={toggleMenu}>☰</button>}
    </div>
  );
};

export default BurgerMenu;
