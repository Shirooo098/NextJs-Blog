import Link from 'next/link';

const links = [
    {
        name: 'Home',
        href: '/dashboard'
    },
    {
        name: 'Create Blogs',
        href: '/dashboard/createBlogs'
    },
    {
        name: 'Blog Lists',
        href: '/dashboard/blogLists'
    }
]

export default function SideNavLinks(){
    return(
        <>
            {links.map((link => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            }))}
        </>
    )
    
}