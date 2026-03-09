import Link from "next/link"

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    return(

        <Link href={href} className="group relative pb-1">{label}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-current transition-width duration-500 ease-out group-hover:w-full"></span>
        </Link>
    )

}