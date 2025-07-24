'use client';

import { useBlogById } from "@/app/lib/data";
import Image from "next/image";
import { manRope } from "../fonts";

export default function BlogPage({id}: {id: string}){
    const { data, isPending, isError, error } = useBlogById(id);

    if(isPending) return <div>Loading...</div>

    if(isError) return <div>Error, {error.message}</div>

    return(
        <>
            <div>
                <div className="mb-8 w-full h-[80vh] text-center">
                    <div className="w-full h-[70vh] flex flex-col z-10 items-center justify-center absolute">
                        <p>{data.category}</p>
                        <p className={`${manRope.className} capitalize text-white text-2xl font-semibold lg:text-5xl md:text-3xl`}>{data.title}</p>
                    </div>
                    <Image
                        loading='lazy'
                        placeholder='empty'
                        priority={false}
                        src={data.imageUrl}
                        alt={data.title}
                        height={500}
                        width={500}
                        className="z-0 aspect-square size-full object-cover object-center"
                    />
                </div>                   
            </div>
        </>
    )
}