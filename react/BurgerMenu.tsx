"use client"
import React, { useState, useEffect } from 'react';
import style from './style.css';
import { Link } from 'vtex.render-runtime';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState<string>()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(style.noScroll);
    } else {
      document.body.classList.remove(style.noScroll);
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const userData = localStorage.getItem("orderform");
      if (userData) {
        console.log("entered here")
        const parsedData = JSON.parse(userData);
        console.log(parsedData,"parse user data")
        setName(parsedData?.clientProfileData?.email);
      }
    }
  }, []);

  console.log(name,"this is the name")

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className={`${style.overlay} ${isOpen ? style.show : ''}`}></div>
      <div className={`${style.menu} ${isOpen ? style.open : ''}`}>
        <div className={style.menu_header}>
          <div className={style.menu_logo}>
            <img src="https://skillnet.vteximg.com.br/arquivos/Autex.png" alt="Autex Logo" />
          </div>
          <div className={style.menu_close}>
            <button className={style.close} onClick={toggleMenu}>✖</button>
          </div>
        </div>
        <div className={style.profile_name}>
          <div className={style.logo_profile}>
            <div className={style.logo_class}>
              <img src="https://skillnet.vteximg.com.br/arquivos/profileLogo.png" alt="Profile Logo" />
            </div>
            <div className={style.name_customer}>
              <p style={{ fontSize: 'x-small' }}>Hola</p>
              <p style={{ fontSize: 'small', color: "#1226aa" }}>{name}</p>
            </div>
          </div>
        </div>
        <div className={style.productos}>
          <span style={{ fontSize: 'large' }}>Productos</span>
          <ul className={style.ul_list}>
            <li> <Link href="/men-s" style={{textDecoration:"none", color:"inherit"}}>Catálogo</Link> </li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Mis listas</a></li>
          </ul>
        </div>
        <div className={style.productos}>
          <span style={{ fontSize: 'large' }}>Especialidades</span>
          <ul className={style.ul_list}>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Automotriz</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Ferretería</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Herramientas y equipos</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Motocicletas</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Seguridad y prevención</a></li>
            <li style={{ color: '#1226aa' }}> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Mostrar más</a> </li>
          </ul>
        </div>
        <div className={style.productos}>
          <span style={{ fontSize: 'large' }}>Mis Pedidos</span>
          <ul className={style.ul_list}>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Historial de pedidos</a></li>
          </ul>
        </div>
        <div className={style.productos}>
          <span style={{ fontSize: 'large' }}>Empresa</span>
          <ul className={style.ul_list}>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>¿Quiénes somos?</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Sucursales</a></li>
          </ul>
        </div>
        <div className={style.productos}>
          <span style={{ fontSize: 'large' }}>Ayuda</span>
          <ul className={style.ul_list}>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Preguntas frecuentes</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Facturación</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Garantías y devoluciones</a></li>
            <li> <a href="/" style={{textDecoration:"none", color:"inherit"}}>¿Cómo comprar en Autex?</a></li>
          </ul>
        </div>
        <div className={style.productos}>
          <ul className={style.ul_list}>
            <li style={{ color: '#1226aa' }}> <a href="/" style={{textDecoration:"none", color:"inherit"}}>Cerrar sesión</a> </li>
          </ul>
        </div>
      </div>
      {!isOpen && !isScrolled && (
        <button className={style.burger} onClick={toggleMenu}>☰</button>
      )}
    </div>
  );
};

export default BurgerMenu;
