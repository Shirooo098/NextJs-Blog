import Image from "next/image"
import { manRope } from "./fonts"
import Link from "next/link"

export default function Hero(){
    return(
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
            <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-gray-900 rounded-3xl z-0"></div>
            <Image
                loading="eager"
                priority={true}
                src="/home.jpg"
                alt="Building Web Applications"
                fill
                className="size-full object-center object-cover rounded-3xl -z-10"
            />
            <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 
            flex flex-col items-start justify-center z-0 text-white">
                <button className={`${manRope.className}
                inline-block py-2 sm:py-3 px-6 sm:px-10
                bg-black text-white rounded-full
                capitalize border-2 border-solid border-white
                hover:scale-105 transition-all ease duration-200
                text-sm sm:text-base`}>
                <Link href={'/categories'}>Web Development</Link>
                </button>
                <Link href={'/'} className="mt-6">
                    <h1 className={`${manRope.className} 
                        font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl
                    `}>
                        Building a Modern Progressive Web Application: Using Current Trend Frameworks
                    </h1>
                </Link>
            </div>
        </article>
    )
}