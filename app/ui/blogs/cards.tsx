import { CategoryType } from "@/app/lib/definitions";
import Image from 'next/image';
import { manRope } from "../fonts";
import { fetchAllBlogs } from "@/app/lib/data";

export default async function Cards({
    limit, category 
} : { 
    limit? : number,
    category?: CategoryType | null
}) {

    const data = await fetchAllBlogs();
    const blogs = data.blogs;

    const filteredBlogs = category
        ? blogs.filter(blog => blog.category === category)
        : blogs;
    const displayBlogs = limit 
        ? filteredBlogs.slice(0, limit)
        : filteredBlogs;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        
        {displayBlogs.map((blog) => (
            <Card
                key={`${blog.id}`}
                title={`${blog.title}`}
                date={`${blog.date}`}
                category={`${blog.category}`}
                imageUrl={`${blog.imageUrl}`}
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
    category: CategoryType,
    imageUrl: string
}){
    return(
        <article className="relative col-span-1 row-span-1">
            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center">
                <Image
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
