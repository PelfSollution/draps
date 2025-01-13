'use client'

import { useState } from 'react'
import { sendEmail } from './actions'
import Link from "next/link"
import { Facebook, Instagram, Scissors, Globe, Home as HomeIcon, PenTool, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const categories = [
  {
    icon: <Scissors className="w-12 h-12 text-teal-500" />,
    title: "VESTIR I BÀSICS",
    description: "A DRAPS es pot trobar tot tipus de teixits de diferents qualitats i en una extensa gamma de colors per confeccionar tot tipus de peces de roba (punt, infantil, llanes, quadres escocesos, entreteles, vichy, folre...)."
  },
  {
    icon: <Globe className="w-12 h-12 text-teal-500" />,
    title: "CARNAVAL, ESPECTACLES I FANTASIES",
    description: "Els teixits per carnaval i espectacles són una altra de les nostres especialitats (bàsics, fantasia, flamencas, blondes, tuls, malles, pèl, estampats...)."
  },
  {
    icon: <HomeIcon className="w-12 h-12 text-teal-500" />,
    title: "LLAR I DECORACIÓ",
    description: "Teixits per la llar i decoracions (teles per la llar, lonetes per fundes de sofà i coixins...)."
  },
  {
    icon: <PenTool className="w-12 h-12 text-teal-500" />,
    title: "MANUALITATS",
    description: "Teixits de cotó especials i Fliselina per fer manualitats de Patchwork, tela rústica (saca, arpillera), panamà per bordar amb punt de creu, buata, feltre..."
  }

  

]

// quiero un array de objetos con 5 usuarios distintos con el nombre del usuario, el email y la foto de perfil

const MOCK_USER_PROFILES = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profilePicture: "https://via.placeholder.com/150"
  }
] 





export default function HomePage() {

    const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

    const handleSubmit = async (formData: FormData) => {
      const result = await sendEmail(formData)
      setFormStatus(result)
    }

  return (
    <div className="flex flex-col min-h-screen">
      <header style={{ backgroundColor: '#30bc9c' }} className="shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/logo-draps.png" alt="Logo DRAPS" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <section id="inicio" className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/img-draps-2.png?height=700&width=1200')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Roba i Teles a metres</h1>
              <p className="text-xl md:text-2xl mb-8">La Bisbal d'Empordà</p>
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <img src="/img-draps.png" alt="Ilustración de costura" className="mx-auto mb-6 rounded-full" />
            
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Més de 40 anys venent teles i teixits a la Bisbal d'Empordà (Girona). A DRAPS pots
                comprar teles a metres de tot tipus de teixits: bàsics, vestits, carnaval, llar, patchwork,
                senyores, estelades...
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('/foto-bisbal.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">La Bisbal d'Empordà</h2>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contacte</h2>
                <p className="mb-6">
                  Si voleu més informació podeu contactar amb nosaltres a través de telèfon o el formulari de contacte.
                </p>
                <div className="space-y-4">
                  <div className="text-xl font-semibold text-teal-600 mb-4">
                    CARME ROS NOGUER
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-teal-500 mr-2" />
                    <span>+34 627900477</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-teal-500 mr-2" />
                    <span>info@draps.cat</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-teal-500 mr-2 mt-1" />
                    <div>
                      <p>Carrer Cavallers, nº 12</p>
                      <p>17100, La Bisbal d'Empordà, Girona</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-teal-500 mr-2 mt-1" />
                    <div>
                      <p>De Dilluns a Dissabte</p>
                      <p>Matí: 9:00h - 13:00h (Dilluns matí tancat)</p>
                      <p>Tarda: 17:00 - 20:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Formulari de contacte</h2>
                <p className="text-gray-600 mb-6">
                  Si voleu fer qualsevol consulta o demanar-nos més informació, empleneu el formulari següent i us contestarem al més aviat possible, gràcies.
                </p>
                <form action={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom / Cognom
                    </label>
                    <Input id="name" name="name" type="text" placeholder="El teu nom" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input id="email" name="email" type="email" placeholder="El teu email" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Consulta a fer
                    </label>
                    <Textarea id="message" name="message" placeholder="La teva consulta" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">Enviar</Button>
                </form>
                {formStatus && (
                  <div className={`mt-4 p-4 rounded ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {formStatus.message}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">On ens podeu trobar?</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.946176746024!2d3.0374373!3d41.9592097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae0b9a4f9c1b7%3A0x6f0d45d9b8b9b9b9!2sCarrer%20Cavallers%2C%2012%2C%2017100%20La%20Bisbal%20d'Empord%C3%A0%2C%20Girona!5e0!3m2!1sen!2ses!4v1635789012345!5m2!1sen!2ses"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-center py-8">
        <p className="text-gray-600 text-2xl font-medium">We ❤️ Tall i Confecció</p>
      </footer>
    </div>
  )
}
