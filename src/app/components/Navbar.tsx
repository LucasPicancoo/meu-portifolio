"use client"


import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"


export default function Navbar(){

    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return(

        <nav className="fixed top-6 w-full flex justify-center z-50 font-sans">

            <motion.div
                animate={{
                    maxWidth: scrolled ? "900px" : "1440px",

                    backgroundColor: scrolled
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(255,255,255,0)",

                    backdropFilter: scrolled
                        ? "blur(12px) saturate(180%)"
                        : "blur(0px)",
                    
                    borderColor: scrolled
                        ? "rgba(107,114,128,0.2)"
                        : "transparent",

                    paddingLeft: scrolled ? 24 : 32,
                    paddingRight: scrolled ? 24 : 32
                }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-full flex items-center h-16 border border-solid"
            >

                <h1 className="flex-1 text-lg flex justify-start">Lucas Picanço</h1>

                <div className="flex-1 flex justify-center items-center gap-6 text-md">

                    <Link href="#home">Home</Link>
                    <Link href="#sobre">Sobre</Link>
                    <Link href="#stacks">Stacks</Link>
                    <Link href="#projetos">Projetos</Link>
                    <Link href="#contato">Contato</Link>

                </div>

                <div className="flex-1 flex justify-end items-center gap-4 font-medium">

                    <p className="cursor-pointer">PT/EN</p>
                    <p className="cursor-pointer">T</p>

                </div>

            </motion.div>
        </nav>
    )

}