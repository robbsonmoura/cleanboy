import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:''})

  function handle(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function submit(e){
    e.preventDefault()
    alert(`Obrigado ${form.name}! Mensagem recebida.`)
    setForm({ name:'', email:'', message:'' })
  }

  return (
    <section className={styles.wrap}>
      <h1>Contato</h1>
      <form onSubmit={submit} className={styles.form}>
        <input name="name" value={form.name} onChange={handle} placeholder="Nome" />
        <input name="email" value={form.email} onChange={handle} placeholder="E-mail" />
        <textarea name="message" value={form.message} onChange={handle} placeholder="Mensagem" rows="5" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

