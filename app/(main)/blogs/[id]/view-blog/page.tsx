import BlogPage from "@/app/ui/blogs/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'View Blog',
}

export default async function Page({ params }: { params: { id: number}}){
    const { id } = await params
    return <BlogPage id={id}/>
}