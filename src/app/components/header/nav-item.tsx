import Link from "next/link"
import { motion } from "framer-motion"

type NavItemProps = {
    label: string
    href: string
    index: number
}

export const NavItem = ({label, href, index}: NavItemProps) => {
    return(
        <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
                type: "spring", 
                stiffness: 120, 
                delay: index * 0.15
            }}
        >
            <Link href={href} className="group relative pb-1">
                {label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-current transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
        </motion.div>
    )
}