"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { NavItem } from "./nav-item"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

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
    const [openMenu, setOpenMenu] = useState(false)

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

                <nav className={`md:flex flex-1 justify-center items-center gap-4 md:gap-6 md:static md:w-auto md:bg-transparent md:flex-row md:p-0 
                    ${openMenu ? 'flex absolute top-17.5 left-0 w-full flex-col bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-lg' : 'hidden'}`}>

                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}

                </nav>

                <div className="flex-1 justify-end items-center gap-4 font-medium hidden md:flex">

                    <p className="cursor-pointer">PT/EN</p>
                    <p className="cursor-pointer">T</p>

                </div>
                
                <button className="md:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark /> : <FaBars/>}
                </button>

            </motion.div>
        </header>
    )

}