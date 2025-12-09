import React from 'react'
import styles from './Home.module.css'

export default function Home(){
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Bem-vindo à Loja CleanBoy</h1>
        <p className={styles.lead}>Exemplo de sistema em React com rotas, props e CSS Modules — minimalista e elegante.</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Produtos</h3>
            <p>Confira nossa seleção minimalista.</p>
          </div>

          <div className={styles.card}>
            <h3>Contato</h3>
            <p>Fale conosco facilmente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}





