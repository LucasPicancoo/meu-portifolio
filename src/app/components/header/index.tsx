"use client"


import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Sobre',
        href: '/about'
    },
    {
        label: 'Stacks',
        href: '/stacks'
    },
    {
        label: 'Projetos',
        href: '/projects'
    },
    {
        label: 'Contato',
        href: '/contact'
    }
    
]


export default function Header(){

    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return(

        <header className="fixed top-6 w-full flex justify-center z-50 font-sans">

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

                <nav className="flex-1 flex justify-center items-center gap-4 md:gap-6 text-md">

                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}

                </nav>

                <div className="flex-1 flex justify-end items-center gap-4 font-medium">

                    <p className="cursor-pointer">PT/EN</p>
                    <p className="cursor-pointer">T</p>

                </div>

            </motion.div>
        </header>
    )

}