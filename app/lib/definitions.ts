import { useQuery } from "@tanstack/react-query";

export type State = {
    errors?: {
        title?: string[],
        category?: string[],
        description?: string[],
        image?: string[] 
    };
    message?: string | null
}

type Blogs = {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
}

const fetchRecentBlogs = async (limit = 6 ): Promise<Array<Blogs>> => {
    const response = await fetch('/api/blogs');
    const data = await response.json();
    return data.filter((x: Blogs) => x.id <= limit)
}

const useRecentBlogs = (limit : number ) => {
    return useQuery({
        queryKey: ['blogs', limit],
        queryFn: () => fetchRecentBlogs(limit)
    })
}

export { fetchRecentBlogs, useRecentBlogs};

export type CategoryType = 'Web-Development' | 'Javascript' | 'Productivity' | 'Projects';