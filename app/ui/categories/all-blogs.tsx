import { useAllBlogs } from "@/app/lib/data";
import Card from "@/app/components/Card";
import Loading from "@/app/(main)/loading";

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        
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