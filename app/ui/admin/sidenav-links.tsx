import Link from 'next/link';

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