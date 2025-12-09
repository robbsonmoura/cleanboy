import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>© {new Date().getFullYear()} CleanBoy</div>
        <div className={styles.links}>
          <a href="#">Política</a>
          <a href="#">Termos</a>
        </div>
      </div>
    </footer>
  )
}

