'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { robotoMono } from '../fonts';

const links = [
    {
        name: 'Home',
        href: '/admin'
    },
    {
        name: 'Create Blogs',
        href: '/admin/createBlogs'
    },
    {
        name: 'Blog Lists',
        href: '/admin/blogLists'
    }
]

export default function SideNavLinks(){
    const pathname = usePathname();

    return(
        <>
            {links.map((link => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            `flex h-[48px] grow items-center justify-center gap-2
                             rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 
                             hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3` , {
                                'bg-sky-200 text-blue-800' : pathname === link.href
                            }
                        )} 
                    >
                        <p className={`${robotoMono.className} text-xl`}>{link.name}</p>
                    </Link>
                )
            }))}
        </>
    )
    
}