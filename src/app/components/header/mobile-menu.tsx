import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavItem } from "./nav-item";

interface navItemType {
        label: string
        href: string
}

interface MobileMenuProps {
    items: navItemType[]
}

export default function MobileMenu({ items }: MobileMenuProps){

    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div>

            <button className="md:hidden cursor-pointer relative z-50" onClick={toggleMenu}>
                    {isOpen ? <FaXmark /> : <FaBars/>}
            </button>
            
            {isOpen &&(

            <div className="absolute -top-6 left-0 w-full h-screen bg-background backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40 md:hidden">
                {items.map((item) => (
                        <NavItem {...item} key={item.label} />
                ))}    
            </div>
            )}

        </div>
    )

}