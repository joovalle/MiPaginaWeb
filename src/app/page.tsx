import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Jordán Ovalle - Portafolio personal',
  description: 'Portafolio animado, Portafolio personal ',
  keywords: 'Desarrollo web, business card, creative, creative portfolio, industrial engineer, online resume, personal, portfolio, professional cv, responsive portfolio, resume, resume theme, developer, data science, análisis de datos, Power BI, Python, Deserción estudiantil, UCSC', 
  authors:[{ name: "Jordán Ovalle Labrín", url: "https://nextjs.org" }],
  
}

export default function Home() {
  return (
    <main className='bg-[#393A47] h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
