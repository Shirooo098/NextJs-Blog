
import BlogPage from "@/app/ui/blogs/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'View Blog',
}

export default async function Page({ params }: { params: { id: string}}){
    const { id } = await params
    return <BlogPage id={id}/>
}