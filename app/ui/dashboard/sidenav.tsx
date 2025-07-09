import Link from 'next/link';
import DevblogLogo from '../devblog-logo';
import SideNavLinks from './sidenav-links';

export default function SideNav(){
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-900 p-4 md:h-40"
                href="/dashboard">
                <div className="flex items-center md:flex-none md:items-end size-full text-white">
                    <DevblogLogo variant='dark'/>
                </div>
            </Link>
            <div className="">
                <SideNavLinks/>
            </div>
        </div>
    )
}