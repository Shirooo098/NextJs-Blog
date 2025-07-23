import Image from "next/image"
import { CardProps } from "../lib/definitions"
import { manRope } from "../ui/fonts"
import Link from "next/link"

export default function Card({
    id,
    title, 
    date,
    category,
    imageUrl
}: CardProps){
    return(
        <Link href={`/blogs/${id}/view-blog`}>
            <article className="relative col-span-1 row-span-1">
                <div className="w-full rounded-xl overflow-hidden flex flex-col items-center">
                    <Image
                        loading='lazy'
                        placeholder='empty'
                        priority={false}
                        src={imageUrl}
                        alt={title}
                        height={500}
                        width={500}
                        className="aspect-[4/3] size-full object-cover object-center"
                    />
                </div>
                <div className="flex flex-col mt-4 w-full">
                    <h4 className={`${manRope.className} uppercase text-semibold sm:text-sm text-blue-900`}>{category}</h4>
                    <h2 className={`${manRope.className} capitalize font-semibold sm:text-lg line-clamp-2 my-1`}>{title}</h2>
                    <p className={`${manRope.className} capitalize font-semibold text-gray-500`}>{date}</p>
                </div>
            </article>
        </Link>
    )
}