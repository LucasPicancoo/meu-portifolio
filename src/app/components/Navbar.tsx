"use client"


import Link from "next/link"


export default function Navbar(){
    return(

        <nav className="w=full">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">

                <div className="flex-1 text-md font-medium">Lucas Picanço</div>

                <div className="flex-1 flex justify-center items-center gap-6 text-sm font-medium">

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
            </div>
        </nav>
    )

}