"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'


interface SignupFormProps {
  onSubmit: (
    email: string,
    subject: string,
    message: string,
    name: string
  ) => void;
}

const ContactForm: React.FC<SignupFormProps> = ({ onSubmit }) => {


      const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form.email, form.subject, form.message, form.name)
    alert(`Merci ${form.name}, votre message a été envoyé !`)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

    return (
    <>
    <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col gap-6 bg-background p-6 "
        >
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-foreground bg-background"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
            className="bg-primary text-white font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Envoyer
          </motion.button>
        </form>
    </>
  )
}



export default ContactForm;