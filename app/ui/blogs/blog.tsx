'use client';

import { useBlogById } from "@/app/lib/data";
import Image from "next/image";

export default function BlogPage({id}: {id: number}){
    const { data, isPending, isError, error } = useBlogById(id);

    if(isPending) return <div>Loading...</div>

    if(isError) return <div>Error, {error.message}</div>

    return(
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.date}</p>
            <p>{data.category}</p>
            <Image
            loading='lazy'
                placeholder='empty'
                priority={false}
                src={data.imageUrl}
                alt={data.title}
                height={500}
                width={500}
            />
        </div>
    )
}