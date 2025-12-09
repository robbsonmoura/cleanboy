import React from 'react'
import styles from './Products.module.css'

const PRODUCTS = [
  { id: 1, name: 'Camiseta Clean', price: 69.9 },
  { id: 2, name: 'Blazer Minimal', price: 399.9 },
  { id: 3, name: 'Calça Soft', price: 219.9 }
]

function ProductCard({ item }){
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <p className={styles.price}>R$ {item.price.toFixed(2)}</p>
        <button className={styles.btn}>Comprar</button>
      </div>
    </article>
  )
}

export default function Products(){
  return (
    <section>
      <h2>Produtos</h2>
      <div className={styles.grid}>
        {PRODUCTS.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}

