'use client';
import { motion } from "framer-motion";



export const HeroSection = () => {

    return(

        <section className="w-full h-200 font-sans px-4">
            
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{once: true}}
                className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-4 text-center">

                <h1 className="text-3xl sm:text-5xl">Olá, sou Lucas Picanço!</h1>
                <p className=" text-base sm:text-2xl font-light ">Construo sistemas e aplicações web que conectam pessoas e tecnologia.</p>

            </motion.div>

        </section>
    )
}