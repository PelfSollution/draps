'use client'

import { useState, useRef } from 'react'
import Link from "next/link"
import {
  GiSewingMachine,
  GiDramaMasks,
  GiSofa,
  GiSewingString
} from 'react-icons/gi'
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Loader2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

const categories = [
  {
    icon: <GiSewingMachine className="w-12 h-12 text-[#2c5f53] transition-colors duration-300" />,
    animationClass: "group-hover:animate-rock",
    title: "VESTIR I BÀSICS",
    description: "A DRAPS es pot trobar tota mena de teixits de diferents qualitats i en una extensa gamma de colors per confeccionar tota classe de peces de roba (punt, infantil, llanes, quadres escocesos, entreteles, vichy, folre...)."
  },
  {
    icon: <GiDramaMasks className="w-12 h-12 text-[#2c5f53] transition-colors duration-300" />,
    animationClass: "group-hover:animate-swing",
    title: "CARNAVAL, ESPECTACLES I FANTASIES",
    description: "Els teixits per carnaval i espectacles són una altra de les nostres especialitats (bàsics, fantasia, flamenques, blondes, tuls, malles, pèl, estampats...)."
  },
  {
    icon: <GiSofa className="w-12 h-12 text-[#2c5f53] transition-colors duration-300" />,
    animationClass: "group-hover:animate-bounce-gentle",
    title: "LLAR I DECORACIÓ",
    description: "Teixits per la llar i decoracions (teles per la llar, lonetes per fundes de sofà i coixins...)."
  },
  {
    icon: <GiSewingString className="w-12 h-12 text-[#2c5f53] transition-colors duration-300" />,
    animationClass: "group-hover:animate-spin-slow",
    title: "MANUALITATS",
    description: "Teixits de cotó especials i Fliselina per fer manualitats de Patchwork, tela rústica (saca, arpillera), panamà per brodar amb punt de creu, buata, feltre..."
  }
]







export default function HomePage() {

  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '55a8a0c8-3d10-4cc7-9ed2-eba0db285e23')
    formData.append('subject', `Nou missatge de ${formData.get('name')} - DRAPS`)
    formData.append('from_name', 'DRAPS Web')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setFormStatus({ success: true, message: 'Correu enviat correctament!' })
        formRef.current?.reset()
      } else {
        setFormStatus({ success: false, message: 'Error al enviar el correu. Torna-ho a provar.' })
      }
    } catch {
      setFormStatus({ success: false, message: 'Error al enviar el correu. Torna-ho a provar.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header style={{ backgroundColor: '#2c5f53' }} className="shadow-sm sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" aria-label="DRAPS - Pàgina principal">
            <Image
              src="/logo-draps.png"
              alt="DRAPS - Botiga de teles i teixits a La Bisbal d'Empordà"
              width={120}
              height={40}
              priority
            />
          </Link>
          {/* Navegació Desktop */}
          <nav aria-label="Navegació principal d'escriptori" className="hidden md:flex gap-6">
            {[
              ['Qui Som', '#qui-som'],
              ['Contacte', '#contacte']
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-teal-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Navegació Mòbil */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-teal-600/50 hover:text-white" aria-label="Obrir menú">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#fdfaf5] border-l-[#d8ccbb]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-serif text-2xl text-[#4a3f35] uppercase tracking-wide">Menú</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6" aria-label="Navegació principal mòbil">
                  {[
                    ['Inici', '#inicio'],
                    ['Qui Som', '#qui-som'],
                    ['Contacte', '#contacte']
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-xl font-serif text-[#4a3f35] hover:text-[#2c5f53] transition-colors border-b border-dashed border-[#d8ccbb] pb-2 text-center"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section id="inicio" aria-label="Presentació de DRAPS" className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/img-draps-2.png?height=700&width=1200')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="border border-white/50 px-6 md:px-12 py-6 md:py-8 rounded-lg backdrop-blur-sm text-center">
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif mb-2 md:mb-4 tracking-wider uppercase">Roba i Teles a metres</h1>
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-serif italic">La Bisbal d&#39;Empordà</p>
              </div>
            </div>
          </div>
        </section>

        <section id="qui-som" aria-label="Qui som - Sobre DRAPS" className="py-16 bg-[#f7f5f0]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="sr-only">Qui som</h2>
              <Image
                src="/img-draps.png"
                alt="Il·lustració de costura i confecció - DRAPS botiga de teles"
                width={280}
                height={280}
                className="mx-auto mb-8 rounded-full shadow-sm border-4 border-[#fdfaf5]"
              />

              <p className="text-xl md:text-2xl text-[#4a3f35] font-serif leading-relaxed max-w-4xl mx-auto">
                Més de 40 anys venent <strong>teles i teixits</strong> a la Bisbal d&#39;Empordà (<strong>Girona</strong>). A <strong>DRAPS</strong> pots comprar teles a metres de tota mena de teixits: <em>bàsics, vestits, carnaval, llar, patchwork, senyeres, estelades...</em>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative bg-[#fdfaf5] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-2 border-dashed border-[#d8ccbb] hover:border-[#b8a68c]"
                >
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #b8a68c 25%, transparent 25%, transparent 75%, #b8a68c 75%, #b8a68c), repeating-linear-gradient(45deg, #b8a68c 25%, #fdfaf5 25%, #fdfaf5 75%, #b8a68c 75%, #b8a68c)", backgroundPosition: "0 0, 10px 10px", backgroundSize: "20px 20px" }}></div>

                  <div className="flex flex-col items-center text-center mb-5 relative z-10">
                    <div className={`mb-5 p-4 rounded-full bg-[#f4ebd8] group-hover:bg-[#ebdccc] transition-colors duration-300 ${category.animationClass} transform-gpu`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#4a3f35] uppercase tracking-wide">{category.title}</h3>
                  </div>
                  <p className="text-[#5c544d] leading-relaxed relative z-10">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="La Bisbal d'Empordà" className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('/foto-bisbal.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="border border-white/50 px-6 md:px-12 py-6 md:py-8 rounded-lg backdrop-blur-sm mx-4 text-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold font-serif tracking-widest uppercase">La Bisbal d&#39;Empordà</h2>
            </div>
          </div>
        </section>

        <section id="contacte" aria-label="Contacte i formulari" className="py-16 bg-[#fdfaf5] border-t-2 border-dashed border-[#d8ccbb]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold font-serif text-[#4a3f35] uppercase tracking-wide mb-6">Contacte</h2>
                <p className="mb-6 text-[#5c544d] text-lg">
                  Si voleu més informació podeu contactar amb nosaltres a través de telèfon o el formulari de contacte.
                </p>
                <div className="space-y-4">
                  <div className="text-xl font-bold font-serif text-[#2c5f53] mb-4 tracking-wide">
                    CARME ROS NOGUER
                  </div>
                  <div className="flex items-center text-[#4a3f35]">
                    <Phone className="w-6 h-6 text-[#2c5f53] mr-3" />
                    <span className="text-lg">+34 627900477</span>
                  </div>
                  <div className="flex items-center text-[#4a3f35]">
                    <Mail className="w-6 h-6 text-[#2c5f53] mr-3" />
                    <span className="text-lg">info@draps.cat</span>
                  </div>
                  <div className="flex items-start text-[#4a3f35]">
                    <MapPin className="w-6 h-6 text-[#2c5f53] mr-3 mt-1" />
                    <div className="text-lg">
                      <p>Carrer Cavallers, nº 12</p>
                      <p>17100, La Bisbal d'Empordà, Girona</p>
                    </div>
                  </div>
                  <div className="flex items-start text-[#4a3f35]">
                    <Clock className="w-6 h-6 text-[#2c5f53] mr-3 mt-1" />
                    <div className="text-lg">
                      <p>De Dilluns a Dissabte</p>
                      <p>Matí: 9:00h - 13:00h (Dilluns matí tancat)</p>
                      <p>Tarda: 17:00 - 20:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold font-serif text-[#4a3f35] uppercase tracking-wide mb-6">Formulari de contacte</h2>
                <p className="text-[#5c544d] text-lg mb-6">
                  Si voleu fer qualsevol consulta o demanar-nos més informació, empleneu el formulari següent i us contestarem al més aviat possible, gràcies.
                </p>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
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
                  <Button type="submit" className="w-full bg-[#2c5f53] hover:bg-[#1f453c] text-white text-lg font-serif tracking-wide py-6" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviant...
                      </>
                    ) : (
                      'Enviar Missatge'
                    )}
                  </Button>
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
                  title="Mapa de la ubicació de DRAPS a La Bisbal d'Empordà"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.946176746024!2d3.0374373!3d41.9592097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae0b9a4f9c1b7%3A0x6f0d45d9b8b9b9b9!2sCarrer%20Cavallers%2C%2012%2C%2017100%20La%20Bisbal%20d'Empord%C3%A0%2C%20Girona!5e0!3m2!1sen!2ses!4v1635789012345!5m2!1sen!2ses"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d2824] text-center py-12" role="contentinfo">
        <p className="text-[#d8ccbb] text-3xl sm:text-4xl md:text-6xl font-bold font-serif flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 text-center">
          <span>Estimem</span> <FaHeart className="text-[#8b3a3a] animate-pulse shrink-0" aria-label="cor" /> <span>Tall i Confecció</span>
        </p>
        <p className="text-[#8e8579] text-sm mt-8">© {new Date().getFullYear()} DRAPS - Teles i Teixits. Tots els drets reservats.</p>
      </footer>
    </div>
  )
}
