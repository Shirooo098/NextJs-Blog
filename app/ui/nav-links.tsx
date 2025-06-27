'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
                            'flex grow justify-center',
                            {
                                ' text-blue-600': pathname === link.href,
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