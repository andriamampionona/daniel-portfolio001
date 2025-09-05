'use client'

import React from 'react'
import ContactForm from './Contact';
import {LocateFixed, MailIcon} from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

export default function Contact() {

  const handleFormSubmit = async (email: string,  subject: string,  message: string, name: string) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', // Assurez-vous que c'est bien un POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, subject, message }),
      });
  
      if (response.ok) {
        // console.log('Email sent successfully');
      } else {
        // console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

 const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // ✅ accessible côté client
  const message = "Bonjour, je souhaite vous contacter !";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto p-6 bg-blend-darken  rounded-lg min-h-[400px] mt-10"
    >
      <h2 className="text-4xl font-bold mb-4 text-foreground text-center">Contactez-moi</h2>
      <p className='text-center mb-4'>Vous avez un projet en tête ou souhaitez colaborer ? N&apos;hésitez pas à me contacter!  </p>

      <div className="flex flex-col md:flex-row gap-8 justify-between">


        <ContactForm onSubmit={handleFormSubmit} />
        <div className="md:w-1/2 mt-5 bg-secondary rounded p-2">
          <p className='text-2xl text-primary'>Informations de contact</p>

          <div className="flex mt-3.5 h-auto p-2.5 flex-row items-center gap-2.5">
            <MailIcon className='bg-blue-500 rounded  w-auto h-auto p-3'/>
            <div className="">
              <p className='text-gray-500'>Email</p>
              <p>danielnomenjanahary44@gmail.com</p>
            </div>
          </div>

          <div className="flex mt-3.5 h-auto p-2.5 flex-row items-center gap-2.5">
            <FaWhatsappSquare className='bg-green-400 h-12 w-12 rounded p-2 '/>
            <div className="">
              <p className='text-gray-500'>Phone</p>
              <p> +261 34 87 171 75 </p>
            </div>
          </div>

          <div className="flex mt-3.5 h-auto p-2.5 flex-row items-center gap-2.5">
            <LocateFixed className='bg-secondary-foreground rounded text-secondary  w-auto h-auto p-3'/>
            <div className="">
              <p className='text-gray-500'>Locatisation</p>
              <p>Fianarantsoa, Madagascar</p>
            </div>
          </div>

          <div className="mt-6 p-4">
            <p className='text-xl text-secondary-foreground'>Etablissons une connéxion</p>
            <div className="flex flex-row gap-6 mt-3.5 ">
              <a href="https://www.facebook.com/daniel.dan.258056" className='' target="_blank" rel="noopener noreferrer">
                <FaFacebook className='bg-blue-500 h-10 w-10 p-2 rounded-full'/>
              </a>

               <a href="https://github.com/andriamampionona" className=' ' target="_blank" rel="noopener noreferrer">
                <FaGithub className='bg-primary  border h-10 w-10 p-2 rounded-full'/>
              </a>

              <a href="https://www.linkedin.com/in/daniel-daniel-86a1282a6/" className=' ' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='bg-blue-400 h-10 w-10 p-2 rounded-full'/>
              </a>

              <a href={whatsappLink} className=' '  target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare className='bg-green-400 h-10 w-10 p-2 rounded-full'/>
              </a>

               
               
               
            </div>
          </div>
        </div>
 
        
      </div>
    </section>
  )
}
