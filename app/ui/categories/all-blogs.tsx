import { useAllBlogs } from "@/app/lib/data";
import Card from "@/app/components/Card";
import Loading from "@/app/(main)/loading";
import { getGridClass } from "@/app/lib/utils";

export default function AllBlogs({
    category
}: {
    category?: string | null
}){
    const { data, isPending, isError, error } = useAllBlogs();

    if(isPending) return <div><Loading/></div>

    if(isError) return <div>Error, {error.message}</div>

    const filteredBlogs = category 
        ? data.filter(data => data.category === category)
        : data

    if(category && filteredBlogs.length === 0){
        return (
            <div className="flex justify-center text-2xl mt-7 lg:text-4xl  md:text-3xl ">
                No blogs yet for category: {category}
            </div>
        )       
    }

    const gridClass = getGridClass(data.length)

  return (
    <div className={`grid ${gridClass} gap-16 mt-16`}>
        
        {filteredBlogs.map((blog) => (
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