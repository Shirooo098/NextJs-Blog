import { robotoMono } from "../fonts";
import Cards from "./cards";
import Link from 'next/link';

export default function RecentBlogs() {
  return (
    <div className="h-full py-6 px-8 sm:px-6 md:px-10 lg:px-16 xl:px-24 ">
      <div className="flex justify-between items-center">
        <h1 className={`${robotoMono.className} capitalize font-bold text-3xl pl-8 border-l-5 border-l-blue-900`}>recent blog posts</h1>
        <Link href="/categories" className={`${robotoMono.className} capitalize font-medium text-blue-900 border-b `}>view all</Link>
      </div>
      <Cards limit={6}/>
    </div>
  )
}
