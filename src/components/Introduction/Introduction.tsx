
import { fadeIn } from '@/utils/motionTransitions'
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'
import Image from 'next/image'


export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.png" priority width="800" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-2xl leading-tight md:mb-10">Jordán Ovalle Labrín,  <br />
                            <span className="text-secondary">{" "}
                            
                            <TypeAnimation
                            
                            sequence={[
                                "Ingeniero Civil Industrial",
                                1200,
                                "Magíster en Gestión Industrial",
                               1200,
                               "Diplomado en Business Analytics (c)",
                                1200,
                                "Freelancer",
                               1300,
                            ]}
                            wrapper="span"
                            speed={{type: 'keyStrokeDelayInMs', value: 100}}
                            deletionSpeed={10}
                            repeat={Infinity}
                            /></span></h1>
                                         
                        <p className="max-w-sm mb-10 text-sm md:max-w-2xl md:mx-0 md:mb-16 md:text-xl ">
                        Disfruto de la tecnología, aprender cosas nuevas, me gusta el análisis y visualización de datos, la inteligencia artificial y su aplicación en distintas áreas
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ver proyectos
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
