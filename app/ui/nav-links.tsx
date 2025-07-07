'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { robotoMono } from "./fonts";

const links = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about'},
    { name: 'Contact', href: '/contact'}
]

export default function NavLinks(){
    const pathname = usePathname();

    return(
        <>
            {links.map((link) => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            `${robotoMono.className} flex justify-center grow items-center text-xl`,
                            {
                                ' text-blue-900': pathname === link.href,
                            }
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}