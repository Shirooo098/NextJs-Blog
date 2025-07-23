import { Blogs, Param } from "./definitions";
import { useQuery } from "@tanstack/react-query";

const fetchRecentBlogs = async (limit = 6 ): Promise<Array<Blogs>> => {
    const response = await fetch('/api/blogs');
    const result = await response.json();
    const blogs: Blogs[] = result.blogs;
    
    return blogs.slice(0, limit)
}

const useRecentBlogs = (limit : number ) => {
    return useQuery({
        queryKey: ['blogs', limit],
        queryFn: () => fetchRecentBlogs(limit)
    })
}

const fetchAllBlogs = async () : Promise<Array<Blogs>> => {
    const response = await fetch('/api/blogs');
    const result = await response.json();

    return result.blogs as Blogs[];
}

const useAllBlogs = () => {
    return useQuery({
        queryKey: ['all-blogs'],
        queryFn: () => fetchAllBlogs()
    })
}

const fetchBlogId = async (id: Param): Promise<Blogs> => {
    const response = await fetch(`/api/blogs/${id}`)
    
    if(!response){
        throw new Error(`Blog with ${id} not found`);
    }

    const result = await response.json();
    return result as Blogs;
}

const useBlogById = (id: Param) => {
    return useQuery({
        queryKey: ['blog', id],
        queryFn: () => fetchBlogId(id),
        enabled: !!id,
    })
}

export { fetchRecentBlogs, useRecentBlogs, useAllBlogs, useBlogById }
