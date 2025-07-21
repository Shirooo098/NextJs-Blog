'use client'

import Image from 'next/image';
import { manRope } from "../fonts";
import { useRecentBlogs } from '@/app/lib/definitions';



export default function Cards({
    category 
} : { 
    category?: string | null,
}) {
    const { data, isPending, isError, error } = useRecentBlogs(2);

    if(isPending) return <div>Loading...</div>

    if(isError) return <div>Error, {error.message}</div>

    const filteredBlogs = category
        ? data?.filter(data => data.category === category)
        : data;
    
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        
        {filteredBlogs.map((data) => (
            <Card
                key={`${data.id}`}
                title={`${data.title}`}
                date={`${data.date}`}
                category={`${data.category}`}
                imageUrl={`${data.imageUrl}`}
            />
        ))}

    </div>
  )
}
export function Card({
    title, 
    date,
    category,
    imageUrl
}: {
    title: string,
    date: string,
    category: string,
    imageUrl: string
}){
    return(
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
    )
}