'use client'

import { useRecentBlogs } from '@/app/lib/data';
import Card from '@/app/components/Card';
import Loading from '@/app/(main)/loading';
import { getGridClass } from '@/app/lib/utils';

export default function RecentBlogsCard() {
    const { data, isPending, isError, error } = useRecentBlogs(6);

    if(isPending) return <div><Loading/></div>

    if(isError) return <div>Error, {error.message}</div>

    const gridClass = getGridClass(data.length)

  return (
    <div className={`grid ${gridClass} gap-16 mt-16`}>
        
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
