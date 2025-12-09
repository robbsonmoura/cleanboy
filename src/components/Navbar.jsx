import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png' // se tiver logo, caso contrário remova esta linha

export default function Navbar({ onToggleTheme, theme }){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          {/* se tiver logo, use <img src={logo} alt="CleanBoy" className={styles.logo}/> */}
          <span className={styles.title}>CleanBoy</span>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" end className={({isActive})=> isActive?styles.active:undefined}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive?styles.active:undefined}>Produtos</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive?styles.active:undefined}>Sobre</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive?styles.active:undefined}>Contato</NavLink>
        </nav>

        <div className={styles.actions}>
          <button onClick={onToggleTheme} aria-label="Alternar tema" className={styles.themeBtn}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

