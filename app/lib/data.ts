import { Blogs } from "./definitions";
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

export { fetchRecentBlogs, useRecentBlogs, useAllBlogs }
