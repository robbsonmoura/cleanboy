import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import styles from './App.module.css'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  function toggleTheme(){
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={styles.app}>
      <NavBar onToggleTheme={toggleTheme} theme={theme} />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

