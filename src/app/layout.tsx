import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'
import { Header } from '@/components/Header'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Jordán Ovalle - Portafolio personal',
  description: 'Portafolio animado, Portafolio personal ',
  keywords: 'Desarrollo web, business card, creative, creative portfolio, industrial engineer, online resume, personal, portfolio, professional cv, responsive portfolio, resume, resume theme, developer, data science, análisis de datos, Power BI, Python, Deserción estudiantil, UCSC', 
  authors:[{ name: "Jordán Ovalle Labrín", url: "https://nextjs.org" }],
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}