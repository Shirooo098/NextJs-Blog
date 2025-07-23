'use client'

import { useRecentBlogs } from '@/app/lib/data';
import Card from '@/app/components/Card';

export default function RecentBlogsCard() {
    const { data, isPending, isError, error } = useRecentBlogs(6);

    if(isPending) return <div>Loading...</div>

    if(isError) return <div>Error, {error.message}</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        
        {data.map((blog) => (
            <Card
                key={`${blog.id}`}
                id={`${blog.id}`}
                title={`${blog.title}`}
                date={`${blog.date}`}
                category={`${blog.category}`}
                imageUrl={`${blog.imageUrl}`}
            />
        ))}

    </div>
  )
}
